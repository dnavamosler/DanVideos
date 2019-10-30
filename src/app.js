import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Home from "./views/containers/home";
import Header from "./sections/components/header";
import SuggestionsList from "./videos/containers/suggestions-list";
import CategoriesList from "./videos/containers/categories-list";
import api from "../utils/api";
import Movie from "./views/containers/movie";
import { useSelector } from "react-redux";
import Search from "./sections/containers/search";
const AppLayout = ({ store }) => {
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

  const selectedMovie = useSelector(state => state.selectedMovie);

  return (
    <>
      {selectedMovie ? (
        <Movie />
      ) : (
        <Home>
          <Header>{/* aqui hijos del header */}</Header>

          <Search />

          <CategoriesList />

          <SuggestionsList />
        </Home>
      )}
    </>
  );
};
export default AppLayout;
