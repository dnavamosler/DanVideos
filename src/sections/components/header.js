import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, StyleSheet } from "react-native";
/****************************************************************************************/
const Header = ({ children }) => {
  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <View style={styles.rigth}>{children}</View>
    </View>
  );
};
/****************************************************************************************/
/****************************************************************************************/

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    padding: 10,
    marginTop: StatusBar.currentHeight
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: "contain"
  },
  rigth: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

export default Header;
