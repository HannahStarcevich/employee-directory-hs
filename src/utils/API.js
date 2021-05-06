import axios from "axios";

const BASEURL = "https://randomuser.me/api/?nat=us,es,au,nz&results=1000";

const API = {
  getEmployees: function() {
    return axios.get(BASEURL);
  }
}

export default API;

