import axios from "axios";

const baseUrl = 'https://api.edamam.com/api/recipes/v2'

const instance = axios.create({
    baseURL: baseUrl,
    params: {
        'app_key': '96b064d203b74cdec88b0b69d7372cd6',
        'app_id': 'c4a7ff8b',
        'type': 'public'
    }
})

export const searchAPI = {
    getItemByQuery(q) {
        return instance
            .get(`?q=${q}`)
            .then(r => console.log(r))
    }
}