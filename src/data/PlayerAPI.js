import api from "../utils/axios";

const PlayerAPI = {
  getVideos: async (page, limit) => {
    return api
      .get("/videos", {
        params: {
          page,
          limit,
        },
      });
  },
  getOtp: async (id) => {
    return api
      .post(
        `/videos/${id}/otp`,
        {

        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
  },
  getVideo: async (id) => {
    return api.get(`/videos/${id}`);
  },
};

export default PlayerAPI;
