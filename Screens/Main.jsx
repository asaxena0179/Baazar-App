import { StyleSheet, Text, View } from 'react-native'
import {MyTabs} from '../Navigators/TabNavigator'
import React from 'react'

export const Main = () => {
  return (
    <MyTabs/>
  )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    }
})