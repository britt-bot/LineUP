import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};
