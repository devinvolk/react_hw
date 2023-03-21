import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="username1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login In
          </button>
        </form>
      </div>
    );
  }
}
