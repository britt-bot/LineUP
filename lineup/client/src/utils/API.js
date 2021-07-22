import axios from "axios";

export default {
  getUsers: function () {
    return axios.get("/api/user");
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
};
