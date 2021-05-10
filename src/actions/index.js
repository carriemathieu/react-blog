import jsonPlaceholder from '../apis/jsonPlaceholder'

// dispatch - pass action into middleware to initiate changes on redux side
export const fetchPosts = () => async dispatch  => {
    const response = await jsonPlaceholder.get('/posts')
        
    dispatch ({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch ({ type: 'FETCH_USER', payload: response.data})
}

// export const fetchPosts = () => {    
//     return async function(dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts')
        
//         dispatch ({ type: 'FETCH_POSTS', payload: response})
//     }
// }