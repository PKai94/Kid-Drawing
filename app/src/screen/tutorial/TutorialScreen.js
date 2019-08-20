import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {sizeHeight, sizeWidth} from "../../util/Size";
import {TUTORIAL_DOT_COLOR_ACTIVE, TUTORIAL_DOT_COLOR_INACTIVE} from "../../../res/style/AppStyle";
import ItemTutorial from "./ItemTutorial";
import Swiper from 'react-native-swiper';
import {TUTORIAL_DATA} from "../../../Constant";
import NavigationActions from "../../router/NavigationActions";
import Button from "../../component/Button";

export default class TutorialScreen extends Component {

    state = {
        page: 0
    }

    render() {
        const {page} = this.state
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} resizeMode={'stretch'}
                       source={require('../../../res/images_kai/background_screen.png')}/>

                <ItemTutorial data={TUTORIAL_DATA[0]}/>
               
                <Button onPress={this.onPressStarted} style={styles.button_started} text={TUTORIAL_DATA[page].button}/>
            </View>
        )
    }

    onPressStarted = () => {
        NavigationActions.resetPage('Main')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    paginationStyle: {
        height: sizeHeight(85)
    },
    activeDotStyle: {
        width: sizeWidth(5)
    },
    button_started: {
        position: 'absolute',
        bottom: sizeWidth(10),
        width: sizeWidth(40),
        marginTop: sizeWidth(3),
    },
});