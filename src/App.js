import React from "react";
import TopSection from "./components/top.js";
import BottomSection from "./components/bottom.js";
import axios from "axios";

import "./sass/app.scss";

const weatherKEY = "8080d91906bcedbc99609a0f51c2f040";
const URL = `http://api.openweathermap.org/data/2.5/weather?&APPID=${weatherKEY}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Reda",
      daysForForecast: 5,
      isLoading: true,
      forecastdays: ""
    };
  }

  updateWeather = () => {
    const { cityName } = this.state;
    axios
      .get(`${URL}&q=${cityName}`)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          temperature: Math.floor(data.main.temp - 273.15),
          text: data.weather.description,
          iconURL: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          isLoading: false
        });
      })
      .catch(err => {
        if (err) console.log("cannot fetch API", err);
      });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?&appid=${weatherKEY}&q=${cityName}`
      )
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          forecastdays: data.list
        });
      })
      .catch(err => {
        if (err) console.log("cannot fetch API", err);
      });
  };

  componentDidMount() {
    const { eventEmitter } = this.props;
    this.updateWeather();
    eventEmitter.on("updateWeather", data => {
      this.setState(
        {
          cityName: data
        },
        () => this.updateWeather()
      );
    });
  }
  render() {
    const {
      isLoading,
      cityName,
      temperature,
      text,
      iconURL,
      forecastdays
    } = this.state;
    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Loading...</h3>}
          {!isLoading && (
            <>
              <TopSection
                cityName={cityName}
                temperature={temperature}
                text={text}
                iconURL={iconURL}
                eventEmitter={this.props.eventEmitter}
              />
              <BottomSection forecastdays={forecastdays} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
