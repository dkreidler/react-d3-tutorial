import React, { Component } from "react";
import { PhotoshopPicker } from "react-color";

export default class ColorPicker extends Component {
  // handleChange(color, event) {
  onChangeComplete = color => {
    this.setState({ color: color.hex });
  };

  // color = {
  //   hex: '#333',
  //   rgb: {
  //     r: 51,
  //     g: 51,
  //     b: 51,
  //     a: 1,
  //   },
  //   hsl: {
  //     h: 0,
  //     s: 0,
  //     l: .20,
  //     a: 1,
  //   },
  // }
  // }

  render() {
    return <PhotoshopPicker onChangeComplete={this.onChange} />;
  }
}
