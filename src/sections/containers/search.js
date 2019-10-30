import React from "react";

import { TextInput, StyleSheet } from "react-native";
import api from "../../../utils/api";
import { useDispatch } from "react-redux";
const Search = ({}) => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const movies = await api.searchMovie(text);
    console.log(movies);
    dispatch({
      type: "SET_SELECTED_MOVIE",
      payload: {
        movie: movies[0]
      }
    });
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
