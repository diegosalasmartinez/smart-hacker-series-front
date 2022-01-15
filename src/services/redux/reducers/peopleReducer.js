import {
    GET_PEOPLE,
    ERROR_PEOPLE
} from '../actions/actionTypes/peopleActionTypes'
import PeopleModel from '../../models/PeopleModel'

const initialState = {
    searchedPerson: new PeopleModel,
    error: "",
    loaded: false,
    failed: false
};

const people = (state = initialState, action) => {    
    switch(action.type){
        case GET_PEOPLE:
            return {...state, searchedPerson: action.playload, error: "", loaded: true, failed: false};
        case ERROR_PEOPLE:
            return {...state, error: action.playload, loaded: true, failed: true};
        default:
            return {...state};
    }
}

export default people