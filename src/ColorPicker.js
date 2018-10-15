import React, { Component } from "react";
import { SliderPicker } from "react-color";

export default class colorPicker extends Component {
  state = {
    color: "#000"
  };

  handleChangeComplete = color => {
    this.setState({ color: color.hex });
  };

  render() {
    return <SliderPicker onChangeComplete={this.handleChangeComplete} />;
  }
}
