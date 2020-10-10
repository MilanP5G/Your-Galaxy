import React, { Component } from 'react';
import { signup } from '../../actions/UserAction';
import { connect } from 'react-redux';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { signup })(SignUp);
