import React from "react";

import { TextInput, StyleSheet } from "react-native";

const Search = ({}) => {
  const [text, setText] = React.useState("");

  const handleSubmit = () => {
    console.log(text);
  };
  const handleChangeText = text => {
    setText(text);
  };
  return (
    <TextInput
      style={styles.input}
      onSubmitEditing={handleSubmit}
      autoCorrect={false}
      autoCapitalize={"none"}
      placeholder="Busca tu película favorita! 🔎"
      underlineColorAndroid={"transparent"}
      onChangeText={handleChangeText}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#eaeaea",
    justifyContent: "center"
  }
});
export default Search;
