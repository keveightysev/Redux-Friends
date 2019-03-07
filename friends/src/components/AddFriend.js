import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions'

class AddFriend extends React.Component {
    state = {
        name: '',
        age: '',
        email: '',
    }

    handleChanges = e => {
        const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
        this.setState({
            [e.target.name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        }
        this.props.addFriend(friend);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChanges} />
                <input type="number" value={this.state.age} name="age" onChange={this.handleChanges} />
                <input type="text" value={this.state.email} name="email" onChange={this.handleChanges} />
                <button>Add Friend</button>
            </form>    
        );
    }
}

export default connect(null, { addFriend })(AddFriend);