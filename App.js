import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/views/containers/home";
import Header from "./src/sections/components/header";
import SuggestionsList from "./src/videos/containers/suggestions-list";
import CategoriesList from "./src/videos/containers/categories-list";

import api from "./utils/api";
import Player from "./src/player/container/player";
export default function App() {
  //existe un if virtual en native para cambiar de plataforma

  // Platform.select({
  // ios: 'valor',
  // android: 'valor'
  // })

  const [SuggestionsListData, setSuggestionsListData] = useState([]);
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await api.getSuggestions(10);
      const categories = await api.getVideos();

      setSuggestionsListData(movies);
      setCategories(categories);
    };

    getMovies();
  }, []);

  return (
    <Home>
      <Header>{/* aqui hijos del header */}</Header>
      <Text>Buscador</Text>
      <Text>Categorias</Text>

      <CategoriesList list={Categories} />
      <Player />
      <SuggestionsList list={SuggestionsListData} />
    </Home>
  );
}
