import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HeaderComponent from '../components/header/HeaderComponent';

export default class ArticleScreen extends Component {
  render() {
    return (
      <View>
        <HeaderComponent navigation={this.props.navigation}/>
        <Text style={styles.text}> Article </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})
