import React, { Component } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import _ from "lodash";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { strings } from "../../../../config/i18n/i18n";
import { ANIMALS_DATA } from "../../../../../Constant";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import NavigationActions from "../../../../router/NavigationActions";
export default class LearnAlphabetScreen extends Component {
  state = {
    studiedAlphabet: [],
    studiedNumber: []
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          resizeMode={"stretch"}
          source={require("../../../../../res/images_kai/background_screen.png")}
        />
        {this.renderToolbar()}
        {this.renderAnimals()}
      </View>
    );
  }

  renderToolbar = () => {
    return (
      <ToolBar
        center={
          <AppText style={styleApp.ToolBarText}>
            {strings("paint.listAnimal")}
          </AppText>
        }
      />
    );
  };

  renderAnimals = () => {
    return (
      <FlatList
        data={ANIMALS_DATA}
        style={{
          margin: sizeWidth(2)
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItemAnimal}
      />
    );
  };

  renderItemAnimal = ({ item }) => {
    const { navigation } = this.props;
    const Img = item.image;
    return (
      <TouchableOpacity
        onPress={() => this.onPressAnimal({ item })}
        style={[
          styles.view,
          { backgroundColor: "#fff" }
        ]}
      >
        <Img height={sizeHeight(20)} width={sizeWidth(20)} />     
      </TouchableOpacity>
    );
  };



  onPressAnimal = ({ item }) => {
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");
    
    NavigationActions.navigate("LetNewPaint", {
      paint: "Animals",
      item: item,
      currentIndex: ANIMALS_DATA.findIndex(letter => letter.id == item.id),
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber
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
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: sizeWidth(17.4),
    height: sizeHeight(17.4),
    margin: sizeWidth(4),
    borderRadius: sizeWidth(6)
  },
  categoryImage: {
   
  }
});
