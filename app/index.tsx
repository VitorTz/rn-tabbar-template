import { ActivityIndicator, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AppStyle from '@/constants/AppStyle'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
    useFonts,
    LeagueSpartan_100Thin,
    LeagueSpartan_200ExtraLight,
    LeagueSpartan_300Light,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
    LeagueSpartan_700Bold,
    LeagueSpartan_800ExtraBold,
    LeagueSpartan_900Black,
} from '@expo-google-fonts/league-spartan';
import { Colors } from '@/constants/Colors';
  

const index = () => {
    const [isLoading, setLoading] = useState(true)

    let [fontsLoaded] = useFonts({
        LeagueSpartan_100Thin,
        LeagueSpartan_200ExtraLight,
        LeagueSpartan_300Light,
        LeagueSpartan_400Regular,
        LeagueSpartan_500Medium,
        LeagueSpartan_600SemiBold,
        LeagueSpartan_700Bold,
        LeagueSpartan_800ExtraBold,
        LeagueSpartan_900Black,
    });    

    useEffect(
        () => {
            if (fontsLoaded == true) {
                setLoading(false)
            }
            if (isLoading == false) {
                router.replace("/(tabs)/database")
            }
        },
        [isLoading, fontsLoaded]
    )

    return (
        <SafeAreaView style={AppStyle.safeArea} >
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}} >
                <ActivityIndicator size={64} color={Colors.white} />
            </View>        
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({})