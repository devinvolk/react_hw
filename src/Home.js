import React, { Component } from "react";
import circle_of_life from "./images/circle_of_life.jpeg";
import lion from "./images/lion.png";
import mankind_yirol from "./images/mankind_yirol.jpeg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to the Wildlife Photography fan site!</h1>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
            </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={circle_of_life} className="d-block w-100" alt="Herd of African elephants standing together facing out" />
            </div>
            <div className="carousel-item">
              <img src={mankind_yirol} className="d-block w-100" alt="Young men from South Sudan standing amount a herd of cattle. Just flying everywhere" />
            </div>
            <div className="carousel-item">
              <img src={lion} className="d-block w-100" alt="Close up of a lion leaping through shallow marsh at the camera" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
