import React, { Component } from 'react'
import { Platform, Dimensions, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import BackgroundImage from './BackgroundImage';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const LINKS = [{ nav: 'Home', text: 'Home' }, { nav: 'Article', text: 'Articles' }]
export default class MenuDrower extends Component {
    navLInk(nav, text) {
        return LINKS.map((l, i) => {
            return (
                <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate(l.nav)} key={i}>
                    <Text style={styles.link}>{l.text}</Text>
                </TouchableOpacity>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <BackgroundImage>
                        <View style={styles.header}>
                            <View style={styles.imageView}>
                                <Image style={styles.image} source={{uri: 'https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/22308699_1728809223799051_6843718684572182654_n.jpg?_nc_cat=103&_nc_ht=scontent-sof1-1.xx&oh=521220795dbc2971ea7219c099cdf7ae&oe=5D26FC89'}} />
                            </View>
                        </View>
                    </BackgroundImage>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLInk()}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#232323'
    },
    imageView: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 300
    },
    topLinks: {
        height: 160,
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
        color: 'black'
    },


})