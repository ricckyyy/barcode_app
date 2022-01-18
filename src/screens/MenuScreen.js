import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ImageBackground, SafeAreaView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// メニュー画面
export default function MenuScreen() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>aiueo</Text>
                <Button title="BARCODE" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
