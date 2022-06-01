import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [place, setPlace] = useState("india");
  const [detail, setDetail] = useState({
    name: "",
    region: "",
    country: "",
    lat: "",
    lon: "",
    time: "",
    img: "",
    weather: "",
    temp_c: "",
    temp_f: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=b8bc41accc9a4cd6b86133502220106&q=${place}&aqi=no`
    )
      .then((res) => res.json())
      .then((res) =>
        setDetail({
          ...detail,
          name: res.location.name,
          region: res.location.region,
          country: res.location.country,
          lat: res.location.lat,
          lon: res.location.lon,
          time: res.location.localtime,
          img: res.current.condition.icon,
          weather: res.current.condition.text,
          temp_c: res.current.temp_c,
          temp_f: res.current.temp_f,
        })
      );
  }
  return (
    <div className="App">
      <Navbar setPlace={setPlace} handleSubmit={handleSubmit} />
      <Home detail={detail} />
    </div>
  );
}

export default App;
