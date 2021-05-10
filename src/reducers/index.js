import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

// adds a "posts" attribute to state
export default combineReducers({
    posts: postsReducer
})