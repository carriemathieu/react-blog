import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = async (dispatch, getState) => {
    // whenever we call action creator from inside action creator, need to dispatch result of calling action creator
    // wait for fetch request completed before continuing
    await dispatch(fetchPosts())
    // _.map -> goes through all posts, and gets all userIDs
    // _.uniq -> gets unique ids, no duplicates
    const userIds = _uniq(_.map(getState().posts, 'userId'))

    userIds.forEach(id => dispatch(fetchUser(id)))
}

// dispatch - pass action into middleware to initiate changes on redux side
export const fetchPosts = () => async dispatch  => {
    const response = await jsonPlaceholder.get('/posts')
        
    dispatch ({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch ({ type: 'FETCH_USER', payload: response.data})
}


// ********* one way to solve issue of multiple fetch requests for same user id *********

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch)

// // private function
// // memoize prevents multiple fetch calls for same user ID
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch ({ type: 'FETCH_USER', payload: response.data})
// })
