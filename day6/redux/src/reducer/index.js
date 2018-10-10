import { combineReducers } from "redux";
import { session } from './session';

const appReducer = combineReducers({
    session 
})

const reducer = (state, action) => {
    return appReducer(state, action)
}

export default reducer;