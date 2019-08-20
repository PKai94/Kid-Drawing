import React, {Component} from "react";
import {Image, StyleSheet, View} from 'react-native';
import {APP_TEXT_APP, APP_TEXT_APP_2} from "../../../res/style/AppStyle";
import {sizeFont, sizeHeight, sizeWidth} from "../../util/Size";
import PropTypes from "prop-types";
import WrapText from "../../component/WrapText";

export default class ItemTutorial extends Component {

    static propTypes = {
        data: PropTypes.any,
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderImage()}
                {this.renderBottom()}
            </View>
        )
    }

    renderImage = () => {
        const {data} = this.props;
        return (
            <View style={styles.view_header}>
                <Image style={styles.image} source={data.image}/>
            </View>
        )
    }

    renderBottom = () => {
        const {data} = this.props;
        return (
            <View style={styles.view_bottom}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: sizeHeight(6),
        marginLeft: sizeHeight(10),
        alignItems: 'center'
    },
    view_header: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_bottom: {
        flex: 1.2,
        width: '100%',
        paddingHorizontal: sizeWidth(12),
        alignItems: 'center',
    },
    text_title: {
        fontSize: sizeFont(6),
        textAlign: 'center',
        paddingTop: sizeWidth(5),
        color: APP_TEXT_APP,
        fontWeight: 'bold',
        marginBottom: sizeHeight(3)
    },
    text_content: {
        fontSize: sizeFont(4.2),
        color: APP_TEXT_APP_2,
        textAlign: 'center'
    }
});