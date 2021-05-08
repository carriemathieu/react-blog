import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

// component rendered on screen
class PostList extends React.Component {
    // component's componentDidMount lifecycle called
    // call action creator from 'componentDidMount'
    componentDidMount() {
        this.props.fetchPosts()
    }

    render () {
        return (
            <div> Post List</div>
        )
    }
}

export default connect(
    null, 
    { fetchPosts }
)(PostList)