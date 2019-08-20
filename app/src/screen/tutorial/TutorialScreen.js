import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {sizeHeight, sizeWidth, sizeFont} from "../../util/Size";
import {TUTORIAL_DOT_COLOR_ACTIVE, TUTORIAL_DOT_COLOR_INACTIVE} from "../../../res/style/AppStyle";
import ItemTutorial from "./ItemTutorial";
import Swiper from 'react-native-swiper';
import {TUTORIAL_DATA} from "../../../Constant";
import NavigationActions from "../../router/NavigationActions";
import ButtonSwiper from "../../component/ButtonSwiper";
import IconCircleButton from "../../component/IconCircleButton";


export default class TutorialScreen extends Component {

    state = {
        page: 0
    }

    render() {
        const {page} = this.state;
        let isShowsPagination = true;
        let isShowsButtons = true;
        if(page == 0 || page == 3){
            isShowsPagination = false;
            return (   
                <Swiper loop={true}
                        showsPagination={isShowsPagination}
                        showsButtons={isShowsButtons}
                        scrollEnabled={false}
                        nextButton=
                        {
                            <ButtonSwiper style={styles.button_startedKai}  text={TUTORIAL_DATA[page].button}/>
                        }
                        prevButton=
                        {
                            <Text />
                        }
                        buttonWrapperStyle={styles.buttonSwiperKai}
                        dotColor={TUTORIAL_DOT_COLOR_INACTIVE}
                        activeDotColor={TUTORIAL_DOT_COLOR_ACTIVE}
                        onIndexChanged={(index) => this.onPressStarted(index)}>
                     
                    {TUTORIAL_DATA.map((data, index) => {
                        return <ItemTutorial data={data} key={index}/>
                    })}
                    
                </Swiper>
                
        )
        }
        else
        {
            return (   
                <Swiper loop={true}
                        scrollEnabled={false}
                        showsPagination={isShowsPagination}
                        showsButtons={isShowsButtons}
                        nextButton=
                        {
                            <ButtonSwiper style={styles.button_started} textStyle={styles.textStyle} text={TUTORIAL_DATA[page].button}/>
                        }
                        prevButton=
                        {
                            <IconCircleButton
                                styleButton={{
                                marginRight: sizeWidth(5)
                                }}
                                backgroundColor={"#8871FF"}
                                source={require("../../../res/images_kai/buttons/arrow_back.png")}
                            />
                        }
                        buttonWrapperStyle={styles.buttonSwiper}
                        paginationStyle={styles.paginationStyle}
                        dotColor={TUTORIAL_DOT_COLOR_INACTIVE}
                        activeDotColor={TUTORIAL_DOT_COLOR_ACTIVE}
                        onIndexChanged={(index) => this.onPressStarted(index)}>
                     
                    {TUTORIAL_DATA.map((data, index) => {
                        return <ItemTutorial data={data} key={index}/>
                    })}
                    
                </Swiper>
                
        )
        }
        
    }

    onPressStarted = (index) => {
        //NavigationActions.resetPage('Main')

        if(this.state.page == 3)
        {
            NavigationActions.resetPage('Main');
        }
        else
        {
            this.setState({page: index});
        }

        //this.setState({page: index});
        
        
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
        height: sizeHeight(22)
    },
    activeDotStyle: {
        width: sizeWidth(5)
    },
    button_started: {
        width: sizeWidth(20),
    },
    button_startedKai: {
        width: sizeWidth(60),
    },
    textStyle:{
        fontSize: sizeFont(4)
    },
    buttonSwiper: {
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        position: 'absolute', 
        top: sizeHeight(35), left: 0, 
        flex: 1, 
        paddingHorizontal: 50, 
        paddingVertical: 10, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    buttonSwiperKai: {
        backgroundColor: 'transparent', 
        flexDirection: 'row',
        position: 'absolute', 
        top: sizeHeight(35), left: 0, 
        flex: 1, 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    icon:{
        marginRight: sizeWidth(5)
    }


});