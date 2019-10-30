import React from "react";
import { View, StyleSheet } from "react-native";
import Layout from "../components/player-layout";
import { Video } from "expo-av";
const Player = ({}) => {
  return (
    <Layout>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        style={styles.player}
        useNativeControls
        resizeMode="contain"
        shouldPlay
        isLooping
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  player: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }
});
export default Player;
