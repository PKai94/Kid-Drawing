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

@inject('dinoStore')
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

      let _QX = (_locationX -this.props.dinoStore._X )/2 + this.props.dinoStore._X;
      let _QY = (_locationY -this.props.dinoStore._Y)/2 + this.props.dinoStore._Y;
      
      var dataStr = `M ${this.props.dinoStore._X},${this.props.dinoStore._Y} Q ${_QX},${_QY} ${_locationX},${_locationY}`;

      //this.props.dinoStore.setLastPointDino(dataStr, data.number, this.props.name);

      this.props.dinoStore.setLastPointAnimals(dataStr, data.number, this.props.name);

      this.props.dinoStore.set_X(_locationX);
      this.props.dinoStore.set_Y(_locationY);
    }
    

  }

  
  _Release(e, data)
  {
    //this.props.dinoStore.setPointStrA("");
  }

  _Press(e, data)
  {
    if (data.isColor)
    {
      this.props.dinoStore.set_X(e.nativeEvent.locationX);
      this.props.dinoStore.set_Y(e.nativeEvent.locationY);
      var dataStr = ` M ${e.nativeEvent.locationX},${e.nativeEvent.locationY} Q ${e.nativeEvent.locationX},${e.nativeEvent.locationY} ${e.nativeEvent.locationX},${e.nativeEvent.locationY}`;

      //this.props.dinoStore.addPointDino({color:this.props.mau, data: dataStr }, data.number, this.props.name);

      this.props.dinoStore.addPointAnimals({color:this.props.mau, data: dataStr }, data.number, this.props.name);
    }
  }

  render() {
    const {data} = this.props;
    //const dataPath = this.props.dinoStore.getPointStore(data.number, this.props.name);
    const dataPath = this.props.dinoStore.getPointStoreAnimals(data.number, this.props.name);
    if (dataPath != null)
    {
      return (
        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, data)} onResponderGrant={(e) => this._Press(e, data)} onResponderRelease={(e) => this._Release(e, data)}  >
          <Defs>
              <Path  id={"path" + data.number}
                  d = {data.d}
                  stroke={data.stroke} 
                  strokeWidth="1"
                  opacity={data.opacity}
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />
  
                  <Use id={"shape" + data.number} href={"#path" + data.number} />            
            </Defs>
            
            <ClipPath id={"clip" + data.number}>
                <Use transform={{ scale: 4.7}} id={"shape" + data.number} href={"#path" + data.number} x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
            </ClipPath>
            
           <Use transform={{scale: 4.7}} href={"#shape" + data.number}  fill={data.fill} />
           
           <G clipPath={"url(#clip" + data.number + ")"}>
               {
                dataPath.listData.map((item, index) =>
                  <Path
                    key={index}
                    d={item.data}
                    fill="none"
                    stroke={item.color}
                    strokeWidth={this.props.dinoStore.strokeColor}
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


