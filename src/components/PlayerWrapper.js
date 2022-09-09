/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PlayerAPI } from "../data";
import VideoPlayer from "./VideoPlayer";

const PlayerWrapper = ({ videoId }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [playerData, setPlayerData] = useState({
    otp: "",
    playbackInfo: "",
  });

  const loadVideo = async (id) => {
    setLoading(true);
    setCurrentVideo(videoId);

    // fetch playback info

    PlayerAPI.getOtp(id).then((res) => {
      setLoading(false);
      setPlayerData({
        otp: res.data.otp,
        playbackInfo: res.data.playbackInfo,
      });
    })
  };

  useEffect(() => {
    loadVideo(videoId);
  }, [videoId]);

  return (
    <>
      {loading && currentVideo && (
        <Flex justifyContent={"center"} alignItems="center" minH={300}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
      {!loading && currentVideo && (
        <VideoPlayer
          otp={playerData.otp}
          playbackInfo={playerData.playbackInfo}
        />
      )}
    </>
  );
};

export default PlayerWrapper;
