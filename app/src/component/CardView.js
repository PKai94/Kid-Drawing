import React, {Component} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {sizeFont, sizeHeight, sizeWidth} from "../util/Size";
import AppText from "./Text";
import IconCircleButton from "./IconCircleButton";
import PropTypes from "prop-types";

export default class CardView extends Component {

    static propTypes = {
        title: PropTypes.string,
        total: PropTypes.string,
        image: PropTypes.any,
        onPress: PropTypes.func,
        style: PropTypes.any,
        backgroundColor: PropTypes.any,
        colorButton: PropTypes.any,
        disabled: PropTypes.bool,
    };

    render() {
        const {title, total, backgroundColor, colorButton, image, onPress, style, disabled, imageKai} = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                style={[styles.view_learn, {backgroundColor, marginVertical: sizeWidth(3)}, style]}>
                <Image resizeMode={'center'} style={styles.image} source={image}/>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginRight: sizeWidth(5)}}>
                    <View style={{marginLeft: sizeWidth(2), flex: 1}}>
                        <AppText style={styles.title}>{title}</AppText>
                    </View>
                    <IconCircleButton backgroundColor={colorButton} source={require("../../res/images/ic_arrow.png")}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view_learn: {
        width: sizeWidth(80),
        height: sizeWidth(100),
        borderRadius: sizeWidth(5),
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: sizeWidth(70),
        width: sizeWidth(70),
    },
    title: {
        fontWeight: 'bold',
        fontSize: sizeFont(5.5),
        color: 'black',
    },
    total: {
        fontWeight: '600',
        fontSize: sizeFont(3.5)
    }
});