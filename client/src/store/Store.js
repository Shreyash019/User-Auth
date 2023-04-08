import { legacy_createStore as createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {UserReducer, profileReducer, forgotPasswordReducer} from '../utils/reducer/UserReducer'


const reducer = combineReducers({
    user: UserReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
});



let initialState={}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store