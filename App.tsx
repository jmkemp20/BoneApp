import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from './screens/splashScreen';
import LoginScreen from './screens/loginScreen';
import DiscoverScreen from './screens/discoverScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {props => <SplashScreen loggedIn />}
          </Stack.Screen>
          <Stack.Screen name="LogIn" component={LoginScreen} />
          <Stack.Screen name="Discover" component={DiscoverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#eee",
    height: "100%",
    width: "100%",
  },
  viewStyle: {
    height: "100%",
    width: "100%",
  },
});
