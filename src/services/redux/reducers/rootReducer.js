import { combineReducers } from 'redux'

import changeState from './changeState'
import specialty from './specialtyReducer'
import people from './peopleReducer'

const rootReducer = combineReducers({
	changeState,
	specialty,
	people
})

export default rootReducer
