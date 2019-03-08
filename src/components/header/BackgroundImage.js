import React, { Component } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export default class BackgroundImage extends Component {
    render() {
        return (
            <ImageBackground  source={{uri: 'https://farm8.staticflickr.com/7867/32099910477_0d3daa0b07_k.jpg'}}
                style={styles.backgroundImage}>
                {this.props.children}
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
})
