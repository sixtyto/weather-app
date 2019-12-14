import React from "react";
import { Manager, Reference, Popper } from "react-popper";

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonClicked: false,
      cityName: ""
    };
  }

  handleLocationInputChange = e => {
    this.setState({
      cityName: e.target.value
    });
  };

  handleSelectCity = e => {
    e.preventDefault();
    const { cityName } = this.state;
    const { eventEmitter } = this.props;
    eventEmitter.emit("updateWeather", cityName);
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked
    }));
  };

  handleLocationChange = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked
    }));
  };

  render() {
    const { isButtonClicked } = this.state;
    return (
      <div className="top-section">
        <div className="top-section__title">Weather@</div>
        <Weather {...this.props} />

        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                onClick={this.handleLocationChange}
                ref={ref}
                className="top-section__button"
              >
                Change location
              </button>
            )}
          </Reference>
          <Popper placement="top">
            {({ ref, style, placement, arrowProps }) =>
              isButtonClicked && (
                <div
                  className="top-section__button-input"
                  ref={ref}
                  style={style}
                  data-placement={placement}
                >
                  <label htmlFor="locationName">Location name:</label>
                  <input
                    id="locationName"
                    type="text"
                    placeholder="city name"
                    onChange={this.handleLocationInputChange}
                  ></input>
                  <button
                    onClick={this.handleSelectCity}
                    className="top-section__button-confirm"
                  >
                    Select
                  </button>
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              )
            }
          </Popper>
        </Manager>
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
