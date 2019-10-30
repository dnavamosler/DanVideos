import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import Home from "./src/views/containers/home";
import Header from "./src/sections/components/header";
import SuggestionsList from "./src/videos/containers/suggestions-list";

import api from "./utils/api";
export default function App() {
  //existe un if virtual en native para cambiar de plataforma

  // Platform.select({
  // ios: 'valor',
  // android: 'valor'
  // })

  const [SuggestionsListData, setSuggestionsListData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await api.getSuggestions(10);
      console.log(movies);
      setSuggestionsListData(movies);
    };

    getMovies();
  }, []);

  return (
    <Home>
      <Header>{/* aqui hijos del header */}</Header>
      <Text>Buscador</Text>
      <Text>Categorias</Text>

      <SuggestionsList list={SuggestionsListData} />
    </Home>
  );
}
