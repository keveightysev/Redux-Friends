import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

class Friend extends React.Component {
    deleteFriend = (e, id) => {
        e.preventDefault();
        console.log(id);
        this.props.deleteFriend(id)
    }
    render() {
        return(
            <>
            <h2>{this.props.friend.name}</h2>
            <p>{this.props.friend.age}</p>
            <p>{this.props.friend.email}</p>
            <button onClick={e => this.deleteFriend(e, this.props.friend.id)}>Delete Friend</button>
            </>
        );
    }
}

export default connect(null, { deleteFriend })(Friend);