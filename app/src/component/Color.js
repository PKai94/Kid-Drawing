import React, {
    Component
} from 'react';

import { StyleSheet, View} from "react-native";

import Svg, {
  Circle
} from 'react-native-svg';

class Color extends Component{
  constructor () {
    super();
    this.state = {
      colorApp: 'white'
    }
  }
  
  
  render(){
    const {item, onPress} = this.props;
    return <View style={styles.container}>
    <Svg width="50" height="50">
            <Circle
                cx="50%"
                cy="50%"
                r="40%"
                fill={this.props.item.color}
                onPress={onPress}
            />
    </Svg>

    
  </View>
  }
}

export default Color;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
  });
