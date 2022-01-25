import axios from 'axios';
 const baseURL = '/api'
//const baseURL = 'https://edatabases.herokuapp.com/api'

const API = axios.create({
    baseURL:baseURL,
    headers:{
        // "Accept":"",
        // "Authorization":""
    }
})

export default API;