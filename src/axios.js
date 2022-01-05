import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-f98ee.cloudfunctions.net/api'
});

export default instance;
//'http://localhost:5001/clone-f98ee/us-central1/api'