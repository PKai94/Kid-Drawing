import React, { Component } from "react";
import { Image, StyleSheet, View,FlatList } from "react-native";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { strings } from "../../../../config/i18n/i18n";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import IconCircleButton from "../../../../component/IconCircleButton";
import Swiper from "react-native-swiper";
import Button from "../../../../component/Button";
import Icons from "../../../../component/Icon";
import NavigationActions from "../../../../router/NavigationActions";
import { NUMBERS_DATA, ALPHABETS_DATA } from "../../../../../Constant";
import { AsyncStorage } from "react-native";
import { saveLearnedData } from "../../../../util/Store";
import {COLOR_APP_BUTTON, COLOR_APP_RED} from "../../../../../res/style/AppStyle";
import Svg from 'react-native-svg';
import Color from "../../../../component/Color";
import Dino3 from "../../../../component/Dino3";
import Shape from "../../../../component/Shape";
import Kai from "../../../../component/Kai";


export default class LetPaintScreen extends Component {
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
      isTouchNext: false,
      colorDraw: 'red',
      ColorListItems : [
      { color: 'yellow' },
      { color: 'red' },
      { color: 'green' },
    ]
    };
  }

  _onPressItem(item){
    return(event) =>{
        this.setState({colorDraw: item.color});
    }
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const page = this.state.page;
    const colorPaint = this.state.colorDraw;

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
            <Svg style={{ height: "100%",  width: "100%"}}>
              {
                item.data.map((itemData, index) =>
                    <Shape data={itemData} name={item.name} mau={colorPaint} key={index}/>)
              }
            </Svg>   
            
          </View>

          <View style={styles.contentColor}>

            <FlatList
              data={this.state.ColorListItems}
              style={{
                margin: sizeWidth(2)
              }}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItemPen}
            />
          </View>
         
        </View>
      </View>
    );
  }


  renderItemPen = ({ item , index}) => {
    return (
      <Color key={index} item={item} onPress={this._onPressItem(item)} />
    );
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
    flex: 1
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
    width: sizeWidth(20),
    marginTop: sizeWidth(5),
  },
  button_painting: {
    marginBottom: sizeWidth(3),
    width: sizeWidth(20),
    marginTop: sizeWidth(5),
    backgroundColor: COLOR_APP_RED,
  },
  contentImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: sizeHeight(30.5),
    width: sizeWidth(90.5),
    backgroundColor: "#fff", 
    borderRadius: sizeWidth(6),
    padding: sizeWidth(5)
  },
  contentColor: {
    marginTop: 20,
    height: sizeHeight(20.5),
    width: sizeWidth(90.5),
    backgroundColor: "#fff", 
    borderRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  }
});
