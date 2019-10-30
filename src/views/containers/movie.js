import React from "react";
import Layout from "../components/movie";
import Player from "../../player/container/player";
import Header from "../../sections/components/header";
import Close from "../../sections/components/close";
import { useDispatch, useSelector } from "react-redux";
import { Animated } from "react-native";
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

  //opacidad
  const [opacity, setOpacity] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: opacity
      }}
    >
      <Layout>
        <Header>
          <Close onPress={closeVideo} />
        </Header>
        <Player />
        <Details {...movie} />
      </Layout>
    </Animated.View>
  );
};

export default Movie;
