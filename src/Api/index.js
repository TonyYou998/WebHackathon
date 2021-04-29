import axios from "axios";
const mainApi=axios.create({
    baseURL:"http://192.168.43.223:8080/"
});

const mockApi=axios.create({
    baseURL:"https://5f826f3d06957200164334ca.mockapi.io/api/",
})
export {mainApi,mockApi}