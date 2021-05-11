import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

// dispatch - pass action into middleware to initiate changes on redux side
export const fetchPosts = () => async dispatch  => {
    const response = await jsonPlaceholder.get('/posts')
        
    dispatch ({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch)

// private function
// memoize prevents multiple fetch calls for same user ID
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch ({ type: 'FETCH_USER', payload: response.data})
})
