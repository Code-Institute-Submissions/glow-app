import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-back-end-716d01c0f794.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;