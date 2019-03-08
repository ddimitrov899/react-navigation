import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './../../screens/HomeScreen';
import ArticleScreen from '../../screens/ArticleScreen';
import MenuDrower from './MenuDrower';

const WIDTH = Dimensions.get('window').width
const DrawerConfig = {
    drawerWidth: WIDTH * 0.63,
    drawerPosition: 'right',
    contentComponent: ({ navigation }) => {
        return(<MenuDrower navigation={navigation} />)
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Article: {
            screen: ArticleScreen
        }
    },
    DrawerConfig
)

export default createAppContainer(DrawerNavigator)