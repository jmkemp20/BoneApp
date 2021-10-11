import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text>Login Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: "#151718",
    alignItems: "center",
    justifyContent: "center",
  },
});
