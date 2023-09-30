import axios from 'axios'

export const API_URL = 'http://test.insource.uz/api/5ec44707cf1d4ae2a208c089bfc594ac'

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export default $api