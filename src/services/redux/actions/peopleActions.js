import {
    GET_PEOPLE,
    ERROR_PEOPLE
} from './actionTypes/peopleActionTypes'
import {
    getPeople as getPeopleAPI,
} from '../../api/people-api'

const getPeople = (id) => async (dispatch) => {
    let message = "Existe un problema con el servidor."
    try {
        const res = await getPeopleAPI(id);
        return dispatch({
            type: GET_PEOPLE,
            playload: res
        })
    } catch(e){
        if (e.response && e.response.statusText === "Unauthorized") {
            return dispatch({
                type: UNAUTHORIZED
            })
        }
        if (e.response && e.response.data && e.response.data.message) {
            message = e.response.data.message;
        }
    }
    return dispatch({
        type: ERROR_PEOPLE,
        playload: message
    })
}

export { getPeople }