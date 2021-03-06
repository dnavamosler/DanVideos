import React from "react";

import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
const Category = ({ genres, background_image }) => {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{
        uri: background_image
      }}
    >
      <Text style={styles.genres}>{genres[0]}</Text>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  genres: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,.75)",
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0
  }
});
export default Category;
