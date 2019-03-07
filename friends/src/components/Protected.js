import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetch } from '../actions'
import Friend from './Friend';
import AddFriend from './AddFriend';

class Protected extends React.Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        return (
            <>
            <AddFriend />
            {this.props.friends.map(friend => <Friend friend={friend} key={friend.id} />)}
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