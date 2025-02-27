import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStyle from '@/constants/AppStyle'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={AppStyle.safeArea} >
        <Pressable onPress={() => router.replace("/(tabs)/database")} style={{width: 200, height: 200, backgroundColor: "red"}} >

        </Pressable>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})