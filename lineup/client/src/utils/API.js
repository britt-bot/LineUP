import axios from "axios";

export default {
  getUser: function () {
    return axios.get("/api/user/me");
  },
  createUser: function (data) {
    console.log("axios.create");
    console.log(data);
    return axios.post("/api/user/add", data);
  },
  loginForm: function (data) {
    console.log("axios.login");
    console.log(data);
    return axios.post("/api/user/login", data);
  },
  favoriteSave: function (data) {
    console.log("axios.favorite");
    console.log(data);
    return axios.post("/api/user/favorite", data);
  },
};
