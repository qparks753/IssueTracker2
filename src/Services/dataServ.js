import axios from "axios"

const getPublicContent =() =>{
    return axios.get("http://localhost:3001/api/test/all")
}

const getUserBoard = () =>{
    return axios.get("http://localhost:3001/api/test/user")
}

const getModeratorBoard = () => {
    return axios.get("http://localhost:3001/api/test/mod");
};

const getAdminBoard = () => {
    return axios.get("http://localhost:3001/api/test/admin");
};

const DataService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}
  
export default DataService;