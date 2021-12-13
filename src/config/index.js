import axios from 'axios'

export default axios.create({
    baseURL: "https://restaurants-api-jodie.herokuapp.com"
})