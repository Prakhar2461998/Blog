import { combineReducers } from 'redux';
import postReduecer  from './postReducer';

export default combineReducers({

    posts: postReduecer
})
