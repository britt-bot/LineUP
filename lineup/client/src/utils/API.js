import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/user");
  },
  createUser: function(data) {
    return axios.post("/api/user/add", data);
  }
};
