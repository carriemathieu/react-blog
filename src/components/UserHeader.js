import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
       const { user } = this.props

        if (!user) {
            return null
        }

        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

// ownProps is reference to components' props
// extract anything doing computation to state & props coming into component in mapstatetoprops
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)