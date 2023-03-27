

import axios from "axios";
import { useState } from "react";
import { RiCelsiusFill } from "react-icons/ri";
import "./HavaDurumu.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

   const handleClick = async () => {
    const api = "08e6270152e60faa193f8f2a74ef07c1";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;

     await axios(baseURL)
     .then(async (data) => {
        await setWeatherData([...weatherData, data.data]);
       setIsActive(true);
     })
      .catch((err) => console.log("Hatanız : ", err));
   };


  const WeatherCard = ({ city, country, temp, feelsLike }) => (
    <div className="col-md-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {city}, {country}
          </h5>
          <div className="genelDeger">
            <p className="card-text">
              Sıcaklık: {temp} <RiCelsiusFill />
            </p>
          </div>
          <div className="his">
            <p className="card-text">
              Hissedilen: {feelsLike} <RiCelsiusFill />
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1>Weather App</h1>
      <div className="form">
        <input
          value={city}
          className="inputText"
          type="text"
          placeholder="Şehri Giriniz"
          onChange={handleChange}
        />
      </div>
      <div className="btnDiv">
        <button onClick={handleClick} className="btn">
          Verileri Getir
        </button>
      </div>

      {isActive && (
        <div className="container ">
          <div className="row ">
            {weatherData.map((data, index) => (
              <WeatherCard
                key={data.id}
                city={data.name}
                country={data.sys.country}
                temp={data.main.temp}
                feelsLike={data.main.feels_like}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
