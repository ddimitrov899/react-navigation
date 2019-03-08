import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default class HeaderComponent extends Component {
  render() {
    return (
          <Icon
          name='md-menu'
          style={styles.menuIcon}
          onPress={() => this.props.navigation.toggleDrawer()}/>
    )
  }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20,
        color: '#000',
        fontSize: 32
    }
})
