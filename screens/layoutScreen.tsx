import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DiscoverScreen from "./discoverScreen";
import MessagesScreen from "./messagesScreen";
import ProfileScreen from "./profileScreen";

export default function LayoutScreen() {
  const [active, setActive] = useState<string>("home");
  
  return (
    <View style={styles.viewStyle}>
      {active === "home" ? (
        <DiscoverScreen active={active} setActive={setActive} />
      ) : active === "profile" ? (
        <ProfileScreen active={active} setActive={setActive} />
      ) : (
        <MessagesScreen active={active} setActive={setActive} />
      )}
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
