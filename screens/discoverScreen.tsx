import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function DiscoverScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text>Discover Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
