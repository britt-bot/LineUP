import axios from "axios";

export default {
    getUser: function (data) {
        console.log("axios.me")
        console.log(data)
    return axios.post("/api/user/me", data);
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
  favoriteSave: function (props) {
    console.log("axios.favorite");
    console.log(props);
    return axios.post("/api/user/favorite", props);
  },
};
