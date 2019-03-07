import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetch } from '../actions'

class Protected extends React.Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        return (
            <>
            {this.props.friends.map(friend => <p>{friend.name}</p>)}
            </>
        );
    }
};

const mapStateToProps = state => {
    return {
        friends: state.friends,
    }
}

export default withRouter(connect(mapStateToProps, { fetch })(Protected));