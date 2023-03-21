import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar sticky-bottom bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-center">
            <span className="navbar-text">
              2023&copy; Boaty McBoatface
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
