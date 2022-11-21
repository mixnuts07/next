const Weather = async (req, res) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.WEATHER_API_KEY}&lang=ja`
  );
  const data = await response.json();
  res.status(200).json(data);
};

export default Weather;
