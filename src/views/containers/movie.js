import React from "react";
import Layout from "../components/movie";
import Player from "../../player/container/player";
import Header from "../../sections/components/header";
const Movie = ({}) => {
  return (
    <Layout>
      <Header />
      <Player />
    </Layout>
  );
};
export default Movie;
