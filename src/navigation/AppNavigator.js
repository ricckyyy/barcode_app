import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from '../screens/MenuScreen'

export default function AppNavigator() {
    return (
        // ナビゲーションリンク
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Stack = createNativeStackNavigator()

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
