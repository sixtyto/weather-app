import React from "react";

import { EventEmitter } from "events";

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: "weather app"
    };
    this.eventEmitter = new EventEmitter();
  }
  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        ...this.state,
        eventEmitter: this.eventEmitter
      });
    });
  }
}
