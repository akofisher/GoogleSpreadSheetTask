import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import PieScreen from '../Screens/PieScreen';


const MainNavigation = () => {


    const Stack = createNativeStackNavigator();



    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Pie" component={PieScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation