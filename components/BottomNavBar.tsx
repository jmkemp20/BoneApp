import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { User, Home, MessageCircle } from "react-native-feather";

import theme from "../constants/theme";
import { NavBarProps } from "../constants/types";

export function BottomNavBar(props: NavBarProps) {
  return (
    <View style={styles.viewStyle}>
      <Pressable
        style={{
          backgroundColor: props.active === "profile" ? theme.grey01 : "white",
          ...styles.navItem,
        }}
        onPress={() => {
          props.setActive("profile");
        }}
      >
        <User
          stroke={props.active === "profile" ? theme.primaryMain : theme.grey03}
          width={38}
          height={38}
        />
      </Pressable>
      <Pressable
        style={{
          backgroundColor: props.active === "home" ? theme.grey01 : "white",
          ...styles.navItem,
        }}
        onPress={() => {
          props.setActive("home");
        }}
      >
        <Home
          stroke={props.active === "home" ? theme.primaryMain : theme.grey03}
          width={38}
          height={38}
        />
      </Pressable>
      <Pressable
        style={{
          backgroundColor: props.active === "messages" ? theme.grey01 : "white",
          ...styles.navItem,
        }}
        onPress={() => {
          props.setActive("messages");
        }}
      >
        <MessageCircle
          stroke={
            props.active === "messages" ? theme.primaryMain : theme.grey03
          }
          width={38}
          height={38}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 125,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  navItem: {
    width: "33%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 15,
  },
});
