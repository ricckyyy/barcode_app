import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from '../screens/MenuScreen'
import BarcodeScan from '../components/BarcodeScan'

export default function AppNavigator() {
    return (
        // ナビゲーションリンク
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Barcode" component={BarcodeScan} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Stack = createNativeStackNavigator()
