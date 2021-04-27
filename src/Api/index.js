import axios from "axios";
const mainApi=axios.create({
    baseURL:"https://hackathon-be-dev.herokuapp.com"
});
export {mainApi}