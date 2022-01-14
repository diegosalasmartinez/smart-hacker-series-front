import { combineReducers } from 'redux'

import changeState from './changeState'
import specialty from './specialtyReducer'

const rootReducer = combineReducers({
	changeState,
	specialty
})

export default rootReducer
