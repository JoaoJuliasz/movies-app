import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTU2ODQxMzc1ODc0NDhmNWYzNTgzNmQzMmVlMzViOCIsInN1YiI6IjY1N2FlOTc4OGUyYmE2MDBlMWZjZDExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C8oAE8pDk7vCUd-V_-gVT_Yf1XfnHUaZMFsra6m96fQ'
    }
})

export default instance