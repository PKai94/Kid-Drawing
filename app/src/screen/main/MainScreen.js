import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import CardView from "../../component/CardView";
import { strings } from "../../config/i18n/i18n";
import NavigationActions from "../../router/NavigationActions";
import { sizeHeight } from "../../util/Size";

export default class MainScreen extends Component {
  componentDidMount() {
    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          resizeMode={"stretch"}
          source={require("../../../res/images_kai/background_screen.png")}
        />
        <View style={{ alignItems: "center" }}>
        <Image
            resizeMode={"stretch"}
            style={{ height: sizeHeight(23) }}
            source={require("../../../res/images_kai/main_header.png")}
          />
          {this.renderWord()}
        </View>
      </View>
    );
  }

  renderWord = () => {
    return (
      <CardView
        image={require("../../../res/images_kai/main/new_painting2.png")}
        title={strings("menu.alphabet")}
        backgroundColor={"#fff"}
        colorButton={"#00A100"}
        onPress={() => NavigationActions.navigate("Learn")}
      />
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});
