import axios from 'axios';




const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQxNDBiM2U5NTk3MGMwMDgwZWFjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTk5Mzc1NiwiZXhwIjoyNTE5OTkzNzU2fQ.6AMdUux3LDgvMDUNOgcFdYHV3KxcCr_ro2mf3fYZo78"
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

export const publicRequest = axios.create({
    baseURL: BASE_URL
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})