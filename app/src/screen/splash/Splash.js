import React, { Component } from "react";
import { View } from "react-native";
import { inject, observer } from "mobx-react/native";
import i18n from "i18n-js";
import Constants from "expo-constants";
import { Device } from "../../model/Device";
import { getLocale } from "../../config/i18n/i18n";
import { getLanguage, getToken } from "../../util/Store";

@inject("loadingStore")
@inject("userStore")
@observer
export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const language = await getLanguage();
      if (language) {
        this.props.userStore.changeLanguage(language);
      } else {
        const languageLocale = getLocale(i18n.locale);
        this.props.userStore.changeLanguage(languageLocale);
      }
      const token = await getToken();
      if (token) {
        this.props.navigation.replace("Main");
      } else {
        this.props.navigation.replace("Tutorial");
      }
    } catch (e) {
      this.props.navigation.replace("Tutorial");
    }
  }

  render() {
    return <View />;
  }
}
