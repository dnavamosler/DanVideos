import React from "react";
import Layout from "../components/movie";
import Player from "../../player/container/player";
import Header from "../../sections/components/header";
import Close from "../../sections/components/close";
import { useDispatch, useSelector } from "react-redux";
import Details from "../../videos/components/detail";
const Movie = () => {
  const dispatch = useDispatch();
  const closeVideo = () => {
    dispatch({
      type: "SET_SELECTED_MOVIE",
      payload: {
        movie: false
      }
    });
  };

  const movie = useSelector(state => state.selectedMovie);
  return (
    <Layout>
      <Header>
        <Close onPress={closeVideo} />
      </Header>
      <Player />
      <Details {...movie} />
    </Layout>
  );
};
export default Movie;
