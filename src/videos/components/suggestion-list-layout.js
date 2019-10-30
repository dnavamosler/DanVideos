import React from "react";

import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const SuggestionListLayout = ({ title, children }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>

      {children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    minHeight: 300
  },
  title: {
    color: "#4c4c4c",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    marginLeft: 8
  }
});
export default SuggestionListLayout;
