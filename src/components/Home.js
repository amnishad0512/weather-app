import React from "react";

const Home = ({ detail }) => {
  return (
    <div className="w-50 mx-auto my-4">
        <div className="row">
            <div className="col-3 bg-primary">a</div>
        </div>
      <h2>{detail.name}</h2>
      <h2>{detail.region}</h2>
      <h2>{detail.country}</h2>
      <h2>{detail.lat}</h2>
      <h2>{detail.lon}</h2>
      <h2>{detail.time}</h2>
      <h2>{detail.img}</h2>
      <h2>{detail.weather}</h2>
      <h2>{detail.temp_c}</h2>
      <h2>{detail.temp_f}</h2>
    </div>
  );
};

export default Home;
