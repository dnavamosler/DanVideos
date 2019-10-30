import React from "react";
import Layout from "../components/movie";
import Player from "../../player/container/player";
import Header from "../../sections/components/header";
import Close from "../../sections/components/close";
import { useDispatch } from "react-redux";
const Movie = ({}) => {
  const dispatch = useDispatch();
  const closeVideo = () => {
    dispatch({
      type: "SET_SELECTED_MOVIE",
      payload: {
        movie: false
      }
    });
  };
  return (
    <Layout>
      <Header>
        <Close onPress={closeVideo} />
      </Header>
      <Player />
    </Layout>
  );
};
export default Movie;
