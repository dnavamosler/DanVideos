import React from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";

const CategoriesListLayout = ({ title, children }) => {
  return (
    <ImageBackground
      style={style.container}
      source={require("../../../assets/backgronund.png")}
    >
      <View>
        <Text style={style.title}>{title}</Text>

        {children}
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  title: {
    color: "#4c4c4c",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold"
  }
});
export default CategoriesListLayout;
