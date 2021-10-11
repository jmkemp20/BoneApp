import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  chatStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    margin: 0,
    padding: 0,
    marginLeft: "auto",
    marginRight: "auto",
    // overflowY: 'scroll',
  },
  container: {
    height: "100%",
    width: "100%",
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    paddingBottom: "15%",
    paddingTop: 0,
    backgroundColor: "#151718",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  inputContainer: {
    width: "100%",
    height: 60,
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    padding: 0,
    paddingBottom: 0,
    backgroundColor: "#151718",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#1e2123",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    color: "#030303",
    marginRight: "auto",
    marginLeft: 8,
    padding: 4,
  },
  textContainer: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    margin: 0,
    padding: 8,
    elevation: 6,
    backgroundColor: "#ffa600",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
