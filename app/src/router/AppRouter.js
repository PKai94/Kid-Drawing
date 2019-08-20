import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import Splash from "../screen/splash/Splash";
import TutorialScreen from "../screen/tutorial/TutorialScreen";
import MainScreen from "../screen/main/MainScreen";
import LearnScreen from "../screen/main/learn/LearnScreen";
import LearnAlphabetScreen from "../screen/main/learn/alphabet/LearnAlphabetScreen";
import LetWriteScreen from "../screen/main/learn/let_writes/LetWriteScreen";
import LetPaintScreen from "../screen/main/learn/let_writes/LetPaintScreen";

const AppRouter = createStackNavigator({
    Splash: {
        screen: Splash
    },
    Tutorial: {
        screen: TutorialScreen,
    },
    Main: {
        screen: MainScreen,
    },
    Learn: {
        screen: LearnScreen,
    },
    LearnAlphabet: {
        screen: LearnAlphabetScreen,
    },
    LetWrite: {
        screen: LetWriteScreen,
    },
    LetPaint: {
        screen: LetPaintScreen,
    }
}, {
    headerMode: 'none',
    initialRouteName: 'Splash'
});

export const AppContainer = createAppContainer(AppRouter);