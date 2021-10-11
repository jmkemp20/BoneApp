import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import theme from "../constants/theme";

interface SplashScreenProps {
    loggedIn: boolean;
};

export default function SplashScreen({ loggedIn }: SplashScreenProps) {

    useEffect(() => {
        
    }, [loggedIn]);

  return (
    <View style={styles.viewStyle}>
      <View style={styles.lightBlock} />
      <View style={styles.mainBlock} />
      <Image style={styles.image} source={require("../assets/BoneLogo.png")} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.primaryDark,
  },
  lightBlock: {
    backgroundColor: theme.primaryLight,
    width: 700,
    height: 250,
    transform: [
      { rotateZ: "-30deg" },
      { translateX: -120 },
      { translateY: -100 },
    ],
  },
  mainBlock: {
    backgroundColor: theme.primaryMain,
    width: 700,
    height: 125,
    transform: [
      { rotateZ: "-30deg" },
      { translateX: -40 },
      { translateY: -80 },
    ],
  },
  image: {
    transform: [
      { translateY: -10 },
    ],
  },
  buttonContainer: {
    width: "90%",
    marginTop: 75,
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 25,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
