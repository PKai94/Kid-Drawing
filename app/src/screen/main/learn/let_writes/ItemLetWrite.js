import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { sizeWidth } from "../../../../util/Size";
import Lottie from "lottie-react-native";
import { Audio } from "expo-av";
import { reset } from "expo-analytics-segment";

export default class ItemLetWrite extends Component {
  static propTypes = {
    data: PropTypes.any,
    onPress: PropTypes.any,
    needShowAnimation: PropTypes.any,
    isNumber: PropTypes.any
  };

  componentDidMount() {
    const needShowAnimation = this.props.needShowAnimation;
    if (needShowAnimation == true) {
      this.upperAnimation.play();
    }
  }

  componentDidUpdate() {
    const { needShowAnimation, isNumber } = this.props;
    this.upperAnimation.reset();
    if (!isNumber) {
      this.lowerAnimation.reset();
    }
    if (needShowAnimation == true) {
      this.upperAnimation.play();
    }
  }

  render() {
    const { data, onPress, needShowAnimation, isNumber } = this.props;
    return (
      <View style={isNumber ? styles.image : styles.container}>
        <Lottie
          ref={upperAnimation => {
            this.upperAnimation = upperAnimation;
          }}
          style={styles.upperImage}
          source={data.upperImage}
          loop={isNumber}
          onAnimationFinish={isNumber ? null : this.finishAnimationUpper}
        />
        {this.renderSecondAnimation({data})}
      </View>
    );
  }

  renderSecondAnimation = ({ data }) => {
    const isNumber = this.props.isNumber;
    if (!isNumber) {
      return (
        <Lottie
          ref={lowerAnimation => {
            this.lowerAnimation = lowerAnimation;
          }}
          style={styles.lowerImage}
          source={data.lowerImage}
          onAnimationFinish={this.finishAnimationLower}
          loop={false}
        />
      );
    }
  };

  finishAnimationUpper = () => {
    this.lowerAnimation.play();
  };

  finishAnimationLower = () => {
    this.upperAnimation.play();
  };

  static playSound = async item => {
    const audio = new Audio.Sound();
    try {
      await audio.loadAsync(item.sound);
      await audio.playAsync();
    } catch (error) {
      //error when playing sound
      console.log(error);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "center"
  },
  upperImage: {
    width: sizeWidth(60),
    height: sizeWidth(60),
    paddingLeft: 20
    // backgroundColor: '#ABDAAA'
  },
  lowerImage: {
    width: sizeWidth(60),
    height: sizeWidth(60),
    paddingEnd: 20
    // backgroundColor: '#123456'
  },
  image: {
    width: sizeWidth(78),
    height: sizeWidth(78),
    alignItems: 'center'
  }

});
