
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Appheader from "../components/header"

const Feed = () => {
  return (
    <>
    <Appheader/>
    <View style={styles.center}>
      <Text>This is the Feed screen</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Feed;