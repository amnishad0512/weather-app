import React from "react";

const Home = ({ detail }) => {
  return (
    <div className="w-75 mx-auto">
      <div className="row mb-5">
        <div className="col-4 offset-4">
          <img src={detail.img} alt="icon" /> <h2>{detail.weather}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h5>Name</h5>
          <h3>{detail.name}</h3>
        </div>
        <div className="col-4">
          <h5>Region</h5>
          <h3>{detail.region}</h3>
        </div>
        <div className="col-4">
          <h5>Country</h5>
          <h3>{detail.country}</h3>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-4">
          <h5>Fahrenheit</h5>
          <h3>{detail.temp_f}</h3>
        </div>
        <div className="col-4">
          <h5>Celsius </h5>
          <h3>{detail.temp_c}</h3>
        </div>
        <div className="col-4">
          <h5>Weather </h5>
          <h3>{detail.weather}</h3>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-4">
          <h5>Latitude</h5>
          <h3>{detail.lat}</h3>
        </div>
        <div className="col-4">
          <h5>Longitude</h5>
          <h3>{detail.lon}</h3>
        </div>
        <div className="col-4">
          <h5>Local Date-Time</h5>
          <h3>{detail.time}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
