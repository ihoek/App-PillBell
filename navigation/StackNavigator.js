import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../pages/main_page';
import ContentPageOne from '../pages/content_page_one';
import ContentPageTwo from '../pages/content_page_two';
import ContentPageThree from '../pages/content_page_three';
import OneTime from '../pages/one_time_page';

const Stack = createStackNavigator();


const StackNavigator = () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderBottomColor: "black",
                    shadowColor: "black",
                    height:100
                },
                headerTintColor: "#FFFFFF",
                headerBackTitleVisible: false
            }}            
        >

            <Stack.Screen name="MainPage" component={MainPage}/>
            
            <Stack.Screen name="ContentPageOne" component={ContentPageOne}/>
            <Stack.Screen name="ContentPageTwo" component={ContentPageTwo}/>
            <Stack.Screen name="ContentPageThree" component={ContentPageThree}/>

            <Stack.Screen name="OneTime" component={OneTime}/>

        </Stack.Navigator>
    )
}

export default StackNavigator;