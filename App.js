import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Home from "./src/views/containers/home";
import Header from "./src/sections/components/header";
import SuggestionsList from "./src/videos/containers/suggestions-list";
import CategoriesList from "./src/videos/containers/categories-list";

import { Provider } from "react-redux";
import api from "./utils/api";
import Player from "./src/player/container/player";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import Loading from "./src/sections/components/loading";
export default function App() {
  //existe un if virtual en native para cambiar de plataforma

  // Platform.select({
  // ios: 'valor',
  // android: 'valor'
  // })

  // const [SuggestionsListData, setSuggestionsListData] = useState([]);
  // const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const categoryList = await api.getVideos();

      //enviar categories
      store.dispatch({
        type: "SET_CATEGORY_LIST",
        payload: {
          categoryList
        }
      });
      const suggestionList = await api.getSuggestions(10);
      //enviar movies
      store.dispatch({
        type: "SET_SUGGESTION_LIST",
        payload: {
          suggestionList
        }
      });

      // setSuggestionsListData(movies);
      // setCategories(categories);
    };

    getMovies();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <Home>
          <Header>{/* aqui hijos del header */}</Header>
          <Player />
          <Text>Buscador</Text>

          <CategoriesList />

          <SuggestionsList />
        </Home>
      </PersistGate>
    </Provider>
  );
}
