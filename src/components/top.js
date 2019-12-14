import React from "react";
import SunImg from "../images/sun.jpg";

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cityName, temperature, text, iconURL } = this.props;
    return (
      <div className="top-section">
        <div className="top-section__title">Weather@</div>
        <Weather
          cityName={cityName}
          temperature={temperature}
          text={text}
          iconURL={iconURL}
        />
        <button className="top-section__button">Change location</button>
      </div>
    );
  }
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cityName, temperature, text, iconURL } = this.props;
    return (
      <div className="top-section__weather">
        <div className="top-section__weather-header">{cityName}</div>
        <div className="top-section__weather-container">
          <div className="top-section__weather-container-image">
            <img src={iconURL} alt="sun" />
          </div>
          <div className="top-section__weather-container-temperature">
            {temperature}°C
          </div>
        </div>
        <div className="top-section__weather-footer">{text}</div>
      </div>
    );
  }
}
