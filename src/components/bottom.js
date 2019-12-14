import React from "react";

export default class BottomSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { forecastdays } = this.props;
    return (
      <div className="bottom-section">
        {forecastdays &&
          forecastdays
            .filter(day => day.dt_txt.split(" ")[1] === "12:00:00")
            .map((day, index) => <Day key={index} forecast={day} />)}
      </div>
    );
  }
}

class Day extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const temperature = Math.floor(this.props.forecast.main.temp - 273.15);
    const day = this.props.forecast.dt_txt.split(" ")[0];
    const text = this.props.forecast.weather[0].description;
    const iconURL = `http://openweathermap.org/img/wn/${this.props.forecast.weather[0].icon}.png`;
    return (
      <div className="bottom-section__day">
        <div className="bottom-section__day-date">{day}</div>
        <div className="bottom-section__day-image">
          <img src={iconURL}></img>
        </div>
        <div className="bottom-section__day-temp">{temperature}°C</div>
        <div className="bottom-section__day-text">{text}</div>
      </div>
    );
  }
}
