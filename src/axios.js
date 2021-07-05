import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
    /** base url to make request to the themoviedatabase */
});


export default instance;



