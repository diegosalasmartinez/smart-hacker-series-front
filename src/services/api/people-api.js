import { apiGet, apiPatch, apiPost } from './api'

const getPeople = async (id) => {
    return await apiGet(`people/`+id);
}

export { getPeople }