import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HeaderComponent from '../components/header/HeaderComponent';

export default class HomeScreen extends Component {
  render() {
    return (
      <View >
        <HeaderComponent navigation={this.props.navigation}/>
        <Text style={styles.text}> Home </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30
    }
})