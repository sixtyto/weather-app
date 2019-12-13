import React from "react";

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="top-section">
          <div className="top-section__title">Weather App</div>
          <Weather />
        </div>
      </>
    );
  }
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="top-section__weather">
          <div className="top-section__weather-header">location</div>
          <div className="top-section__weather-container">
            <div className="top-section__weather-container-image">IMG</div>
            <div className="top-section__weather-container-temperature">
              Temperature
            </div>
          </div>
          <div className="top-section__weather-footer">Sunny</div>
        </div>
      </>
    );
  }
}
