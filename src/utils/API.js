import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=1000";
// const APIKEY = "...";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
