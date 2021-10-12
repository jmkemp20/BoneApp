import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from "react-native";
import LayoutScreen from './screens/layoutScreen';

import SplashScreen from './screens/splashScreen';

export default function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <View style={styles.backgroundStyle}>
      {loggedIn ? <LayoutScreen /> : <SplashScreen handleLogIn={setLoggedIn} />}
    </View>
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
