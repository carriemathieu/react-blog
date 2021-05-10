import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

// adds a "posts, users" attribute to state
export default combineReducers({
    posts: postsReducer, 
    users: usersReducer
})