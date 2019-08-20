import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { strings } from "../../../../config/i18n/i18n";
import { sizeFont, sizeWidth } from "../../../../util/Size";
import IconCircleButton from "../../../../component/IconCircleButton";
import Swiper from "react-native-swiper";
import ItemLetWrite from "./ItemLetWrite";
import Button from "../../../../component/Button";
import Icons from "../../../../component/Icon";
import NavigationActions from "../../../../router/NavigationActions";
import {  ANIMALS_DATA } from "../../../../../Constant";
import { AsyncStorage } from "react-native";
import { saveLearnedData } from "../../../../util/Store";
import {COLOR_APP_BUTTON, COLOR_APP_RED} from "../../../../../res/style/AppStyle";


export default class LetWriteScreen extends Component {
  state = {
    page: 0,
    isTouchNext: false
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const currentIndex = navigation.getParam("currentIndex");
    this.state = {
      page: currentIndex,
      isTouchNext: false
    };
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const page = this.state.page;
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          resizeMode={"stretch"}
          source={require("../../../../../res/images_kai/background_screen.png")}
        />
        {this.renderToolbar()}
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <View style={styles.contentImage}>
            <Image source={item.url_color} style={styles.categoryImage} />
          </View>
          <Button
            onPress={() => this.onPressReplay(page)}
            style={styles.button_replay}
            text={strings("common.replay")}
          />
           <Button
            onPress={() => this.onPressPainting(item)}
            style={styles.button_painting}
            text={strings("common.painting")}
          />
        </View>
      </View>
    );
  }


  onPressReplay = id => {
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");
    
    NavigationActions.navigate("LetWrite", {
      items: ANIMALS_DATA,
      currentIndex: ANIMALS_DATA.findIndex(letter => letter.id == id),
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber
    });
  };

  onPressPainting = item  => {
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");
    
    NavigationActions.navigate("LetPaint", {
      item: item,
      currentIndex: ANIMALS_DATA.findIndex(letter => letter.id == item.id),
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber
    });
  };

  renderToolbar = () => {
    return (
      <ToolBar
        right={this.renderToolbarRight()}
        center={
          <AppText style={styleApp.ToolBarText}>
          </AppText>
        }
      />
    );
  };

  renderToolbarRight = () => {
    return (
      <IconCircleButton
        onPress={() => this.onPressHome()}
        styleButton={{
          marginRight: sizeWidth(5)
        }}
        backgroundColor={"#8871FF"}
        source={require("../../../../../res/images/ic_home.png")}
      />
    );
  };

  onPressPrev = () => {
    this.setState({
      page: this.state.page - 1,
      isTouchNext: true
    });
  };


  onPressHome = () => {
    const { navigation } = this.props;
    const isNumber = navigation.getParam("isNumber");
    NavigationActions.navigate("Learn", {
      studiedNumber: navigation.getParam("studiedNumber"),
      studiedAlphabet: navigation.getParam("studiedAlphabet")
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  view_control: {
    marginBottom: sizeWidth(2),
    flexDirection: "row",
    width: "80%",
    alignContent: "center",
    justifyContent: "space-between"
  },
  icon_mode: {
    height: sizeWidth(17),
    width: sizeWidth(17)
  },
  text: {
    fontWeight: "bold",
    fontSize: sizeFont(5),
    color: "#595959",
    marginTop: sizeWidth(8)
  },
  text_number: {
    fontWeight: "bold",
    fontSize: sizeFont(5),
    color: "#595959"
  },
  button_replay: {
    marginBottom: sizeWidth(3),
    width: sizeWidth(60),
    marginTop: sizeWidth(5),
  },
  button_painting: {
    marginBottom: sizeWidth(3),
    width: sizeWidth(60),
    marginTop: sizeWidth(5),
    backgroundColor: COLOR_APP_RED,
    
  },
  contentImage: {
    height: 400,
    width: 320,
    backgroundColor: "#fff", 
    borderRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  categoryImage: {
  }
});
