import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLOR_APP_BLACK, COLOR_APP_BUTTON, COLOR_APP_WHITE, FONT_FAMILY_APP, COLOR_APP_RED} from "../../res/style/AppStyle";
import Text from "./Text";
import {sizeFont, sizeWidth} from "../util/Size";
import PropTypes from "prop-types";
import Fontello from "./Fontello";
import Icons from "./Icon";

export default class Button extends Component<Props> {

    static propTypes = {
        text: PropTypes.string,
        textStyle: PropTypes.any,
        onPress: PropTypes.func,
        iconRight: PropTypes.any,
        iconLeft: PropTypes.any,
        style: PropTypes.any,
        disabled: PropTypes.bool,
        configLeft: PropTypes.any,
        configRight: PropTypes.any,
    };

    static defaultProps = {
        configLeft: {
            color: COLOR_APP_BLACK,
            size: sizeWidth(4),
            style: {
                marginRight: sizeWidth(3)
            }
        },
        configRight: {
            color: COLOR_APP_BLACK,
            size: sizeWidth(4),
            style: {
                marginLeft: sizeWidth(3)
            }
        },
    }

    render() {
        const {style, configLeft, configRight, textStyle, onPress, disabled, text, iconRight, iconLeft} = this.props;

        return (
            <TouchableOpacity
                style={[styles.view_button, style]}
                onPress={onPress}
                disabled={disabled}>
                <Icons style={styles.icon}
                       source={require('../../res/images/ic_ellipse.png')}/>
                <View style={styles.button}>
                    {iconLeft && <Icons
                        style={configLeft.style}
                        source={iconLeft}/>}
                    {
                        this.props.children || <Text style={[styles.TextInside, textStyle]}>
                            {text}
                        </Text>
                    }
                    {iconRight && <Fontello
                        name={iconRight} color={configRight.color} size={configRight.size}
                        style={configRight.style}/>}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    view_button: {
        backgroundColor: COLOR_APP_BUTTON,
        borderRadius: sizeWidth(10),
        elevation: 1,
        shadowOffset: {width: 0, height: sizeWidth(0.1)},
        shadowOpacity: 0.1,
    },
    button: {
        paddingVertical: sizeWidth(3),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    icon: {
        position: 'absolute',
        left: sizeWidth(2)
    },
    TextInside: {
        textAlign: 'center',
        fontFamily: FONT_FAMILY_APP,
        fontWeight: 'bold',
        color: COLOR_APP_WHITE,
        fontSize: sizeFont(5.3)
    },
});
