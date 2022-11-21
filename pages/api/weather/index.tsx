import { useState, useEffect } from "react";

type WeatherType = {
  weather: string;
};

const Index = () => {
  //   const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch("/api/Weather");
      const data = await response.json();
      console.log(data);
      //   setWeather(data);
    };
    fetchWeather();
  }, []);
  return (
    <div>
      {/* {weather.weather && <p> 東京の天気: {weather.weather[0].main}</p>} */}
    </div>
  );
};

export default Index;
