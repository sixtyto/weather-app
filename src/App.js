
import React from "react";
import TopSection from "./components/top.js";
import BottomSection from "./components/bottom.js";
import axios from "axios";

import "./sass/app.scss";

const weatherKEY = "94ef15104d494a45b00be420b599d834";
const URL = `http://api.weatherstack.com/current?access_key=${weatherKEY}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "London",
      forecastDays: 5,
      isLoading: true
    };
  }

  updateWeather = () => {
    const { cityName, forecastDays } = this.state;
    axios
      .get(`${URL}&query=${cityName}&days=${forecastDays}`)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          temperature: data.current.temperature,
          text: data.current.weather_descriptions[0],
          iconURL: data.current.weather_icons[0],
          isLoading: false
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
      this.setState({
        cityName: data
      });
      this.updateWeather();
    });
  }
  render() {
    const { isLoading, cityName, temperature, text, iconURL } = this.state;
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
              <BottomSection />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
