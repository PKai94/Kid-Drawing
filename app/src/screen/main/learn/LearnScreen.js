import React, { Component } from "react";
import _ from "lodash";
import { Image, StyleSheet, View } from "react-native";
import ToolBar from "../../../component/ToolBar";
import styleApp from "../../../../res/style/style";
import AppText from "../../../component/Text";
import { strings } from "../../../config/i18n/i18n";
import CardView from "../../../component/CardView";
import { sizeWidth } from "../../../util/Size";
import NavigationActions from "../../../router/NavigationActions";
import { AsyncStorage } from "react-native";

export default class LearnScreen extends Component {
  state = {
    isLoading: true,
    studiedAlphabet: [],
    studiedNumber: []
  };

  componentDidMount() {
    AsyncStorage.getAllKeys((error, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        const alphabets = [];
        const numbers = [];
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          if (store[i] != null) {
            //data provide is [key: value] - value [[]]
            if (store[i][0] == "learned_alphabets") {
              alphabets.push(JSON.parse(store[i][1]));
            }

            if (store[i][0] == "learned_numbers") {
              numbers.push(JSON.parse(store[i][1]));
            }
          }
          if (i == keys.length - 1) {
            this.setState({
              isLoading: false,
              studiedAlphabet: alphabets[0],
              studiedNumber: numbers[0]
            });
          }
        });
      });
    });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            resizeMode={"stretch"}
            source={require("../../../../res/images_kai/background_screen.png")}
          />
          {this.renderToolbar()}
          <Image
            resizeMode={"stretch"}
            source={require("../../../../res/images_kai/background_bird.png")}
          />
          <View
            style={{
              width: "100%",
              alignItems: "center",
              position: "absolute",
              top: sizeWidth(40)
            }}
          >
            {this.renderWord()}
          </View>
        </View>
      );
    } else {
      return null;
    }
  }

  renderToolbar = () => {
    return (
      <ToolBar
        center={
          <AppText style={styleApp.ToolBarText}>
            {strings("learn.title")}
          </AppText>
        }
      />
    );
  };

  renderWord = () => {
    const { studiedAlphabet } = this.state;

    let total = 25;
    if (!_.isNil(studiedAlphabet)) {
      total = 25 - this.state.studiedAlphabet.length;
    }
    return (
      <CardView
        image={require("../../../../res/images_kai/animalScreen/animals.png")}
        title={strings("learn.words")}
        backgroundColor={"#fff989"}
        colorButton={"#FE6230"}
        onPress={() =>
          NavigationActions.navigate("LearnAlphabet", {
            studiedNumber: this.state.studiedNumber,
            studiedAlphabet: this.state.studiedAlphabet
          })
        }
      />
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  gifView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "red"
  },
  firstBirdImg: {
    width: 100,
    height: 100,
    justifyContent: "flex-start"
  },
  secondBirdImg: {
    width: 100,
    height: 100,
    justifyContent: "flex-end"
  }
});
