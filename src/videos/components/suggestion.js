import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";
const Suggestions = ({ medium_cover_image, year, rating, genres, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={{
            uri: medium_cover_image
          }}
        />
        <View style={styles.gender}>
          <Text style={styles.genderText}>{genres[0]}</Text>
        </View>
      </View>
      <View style={styles.rigth}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>{rating} Estrellas</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: "contain"
  },
  rigth: {
    paddingLeft: 10,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 18,
    color: "#44546b"
  },
  year: {
    backgroundColor: "#70b124",
    paddingVertical: 4,
    paddingHorizontal: 6,
    alignSelf: "flex-start",
    color: "white",
    fontSize: 11,
    borderRadius: 5,
    overflow: "hidden"
  },
  rating: {
    color: "#6b6b6b",
    fontSize: 14,
    fontWeight: "bold"
  },
  gender: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  genderText: {
    color: "white",
    fontSize: 11
  }
});
export default Suggestions;
