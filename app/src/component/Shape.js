import * as React from 'react';
import{
    Component
} from 'react'
import {View, StyleSheet} from 'react-native';
import Svg, {
    Path,
    G,
    ClipPath,
    Defs,
    Use
  } from 'react-native-svg';

import {inject, observer} from "mobx-react/native";

@inject('paintStore')
@observer

export default class Shape extends Component {
  constructor(props){
    super(props);
  }

  _Move(e, data)
  {
    if (data.isColor)
    {
      let _locationX = e.nativeEvent.locationX;
      let _locationY = e.nativeEvent.locationY;  

      let _QX = (_locationX -this.props.paintStore._X )/2 + this.props.paintStore._X;
      let _QY = (_locationY -this.props.paintStore._Y)/2 + this.props.paintStore._Y;
      
      var dataStr = `M ${this.props.paintStore._X},${this.props.paintStore._Y} Q ${_QX},${_QY} ${_locationX},${_locationY}`;

      if (this.props.paint === "Animals")
      {
        this.props.paintStore.setLastPointAnimals(dataStr, data.number, this.props.name);
      }
      else if (this.props.paint === "Objects")
      {
        this.props.paintStore.setLastPointObjects(dataStr, data.number, this.props.name);
      }
      

      this.props.paintStore.set_X(_locationX);
      this.props.paintStore.set_Y(_locationY);
    }
    

  }

  
  _Release(e, data)
  {
    //this.props.paintStore.setPointStrA("");
  }

  _Press(e, data)
  {
    if (data.isColor)
    {
      this.props.paintStore.set_X(e.nativeEvent.locationX);
      this.props.paintStore.set_Y(e.nativeEvent.locationY);
      var dataStr = ` M ${e.nativeEvent.locationX},${e.nativeEvent.locationY} Q ${e.nativeEvent.locationX},${e.nativeEvent.locationY} ${e.nativeEvent.locationX},${e.nativeEvent.locationY}`;

      if (this.props.paint === "Animals")
      {
        this.props.paintStore.addPointAnimals({color:this.props.mau, data: dataStr }, data.number, this.props.name);
      }
      else if (this.props.paint === "Objects")
      {
        this.props.paintStore.addPointObjects({color:this.props.mau, data: dataStr }, data.number, this.props.name);
      }
    }
  }

  render() {
    const resolution = 82 / Math.min(82, 83);
    const {data} = this.props;
    const {paint} = this.props;
    //const dataPath = this.props.paintStore.getPointStore(data.number, this.props.name);
    const dataPath = paint === "Animals" ? this.props.paintStore.getPointStoreAnimals(data.number, this.props.name):this.props.paintStore.getPointStoreObjects(data.number, this.props.name);
    if (dataPath != null)
    {
      return (
        <G  onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, data)} onResponderGrant={(e) => this._Press(e, data)} onResponderRelease={(e) => this._Release(e, data)}  >
          <Defs>
              <Path  id={"path" + data.number}
                  d = {data.d}
                  stroke={data.stroke} 
                  strokeWidth="0.8"
                  opacity={data.opacity}
                  x = {this.props.paintStore.posX}
                  y = {this.props.paintStore.posY}
                  />
  
                  <Use id={"shape" + data.number} href={"#path" + data.number} />            
            </Defs>
            
            <ClipPath id={"clip" + data.number}>
                <Use transform={{  scale: 5}}  id={"shape" + data.number} href={"#path" + data.number} x = {this.props.paintStore.posX} y = {this.props.paintStore.posY}/>
            </ClipPath>
            
           <Use transform={{scale: 5}}   href={"#shape" + data.number}  fill={data.fill} />
           
           <G clipPath={"url(#clip" + data.number + ")"}>
               {
                dataPath.listData.map((item, index) =>
                  <Path
                    key={index}
                    d={item.data}
                    fill="none"
                    stroke={item.color}
                    strokeWidth={this.props.paintStore.strokeColor}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />)
              }     
            </G> 
          </G>
      );
    }

    return null;
    
  }
}


