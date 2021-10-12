import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BottomNavBar } from "../components/BottomNavBar";
import { NavBarProps } from "../constants/types";

export default function MessagesScreen(props: NavBarProps) {
  return (
    <View style={styles.viewStyle}>
      <SafeAreaView>
        <Text>Messages Screen!</Text>
      </SafeAreaView>
      <BottomNavBar active={props.active} setActive={props.setActive} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    height: "100%",
    width: "100%",
    position: "relative",
  },
});
