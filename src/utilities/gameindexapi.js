import sendRequest from './gameindexservice'
const BASE_URL = '/api/gameindex'

export function getAll() {
    return sendRequest(BASE_URL)
}

