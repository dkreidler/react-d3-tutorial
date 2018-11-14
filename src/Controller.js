import React, { Component } from "react";
import Viz from "./Viz.js";
import SketchExample from "./SketchExample.js";
// import ButtonExample from "./ButtonExample.js";
// import ColorPicker from "./ColorPicker.js";

export default class Controller extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      width: "",
      opacity: "",
      toDraw: []
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    const newShape = {
      color: this.state.color,
      width: this.state.width,
      opacity: this.state.opacity
    };
    this.setState({ toDraw: [...this.state.toDraw, newShape] });
  }

  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div className="controller">
        <form onSubmit={this.onSubmit}>
          {/* <ColorPicker /> */}
          <SketchExample />
          {/* <select name="color" onChange={this.onChange}>
            <option disabled selected="selected" value="">
              {" "}
              Color{" "}
            </option>
            <option value="red"> Red </option>
            <option value="orange"> Orange </option>
            <option value="yellow"> Yellow </option>
            <option value="green"> Green </option>
            <option value="blue"> Blue </option>
            <option value="purple"> Purple </option>
          </select> */}
          <label> Choose opacity: </label>
          <select name="opacity" onChange={this.onChange}>
            {/* TODO: insert opacity slider */}
            <option disabled selected="selected" value="">
              {" "}
              Opacity{" "}
            </option>
            <option value=".2">.2</option>
            <option value=".4">.4</option>
            <option value=".6">.6</option>
            <option value=".8">.8</option>
            <option value="1">1</option>
          </select>
          <label> How big: </label>
          <input name="width" onChange={this.onChange} />
          <button type="submit"> Draw! </button>
        </form>
        {this.state.toDraw.length ? <Viz shapes={this.state.toDraw} /> : null}
      </div>
    );
  }
}
