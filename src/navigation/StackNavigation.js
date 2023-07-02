import {
  View,
  Text,
  Platform,
  Linking,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // import createBottomTabNavigator
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
