import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onchange={this.handleChange} 
                />
                <input 
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onchange={this.handleChange} 
                />
                <button>Log In</button>
            </form>
        );
    }
}

export default connect(null, {})(Login);