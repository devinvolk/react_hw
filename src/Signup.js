import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <form className="row g-3 d-flex justify-content-center">
          <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              defaultValue="Boaty"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              defaultValue="McBoatface"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationDefault01"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault02" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationDefault02"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefaultUsername" className="form-label">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                defaultValue="boatymcboatface"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              defaultValue="Boatsville"
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="validationDefault04" className="form-label">
              State
            </label>
            <select className="form-select" id="validationDefault04" required>
              <option selected disabled value>
                Choose...
              </option>
              <option>Boatyard</option>
              <option>...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationDefault05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              defaultValue="12345"
              required
            />
          </div>
          <div className="col-12">
            <div className="form-check d-flex justify-content-center">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    );
  }
}