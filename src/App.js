import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      padName: " Press any key ",
      Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      D: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      Z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      X: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      C: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    };
  }
  handleChange = (event) => {
    this.setState({
      padName: event.target.id,
    });
    console.log(event.target.childNodes[1].play());
  };
  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed);
  }
  keyPressed = (e) => {
    switch (e.keyCode) {
      case 81:
        document.getElementById("Agressive").click();
        break;
      case 87:
        document.getElementById("Bitch").click();
        break;
      case 69:
        document.getElementById("Clap").click();
        break;
      case 65:
        document.getElementById("Drop").click();
        break;
      case 83:
        document.getElementById("Jerry").click();
        break;
      case 68:
        document.getElementById("Kick").click();
        break;
      case 90:
        document.getElementById("Low-kick").click();
        break;
      case 88:
        document.getElementById("Snare").click();
        break;
      case 67:
        document.getElementById("Tom").click();
        break;
    }
  };

  render() {
    return (
      <div
        className="container-fluid fill-viewport "
        style={{ backgroundColor: "#121212" }}
        id="drum-machine"
      >
        <h1 className="text text-responsive text-center text-info mb-5">
          Drum Machine
        </h1>
        <h3
          id="display"
          className="text-white  p-1 text-center text-responsive mb-4 col-6 col-sm-2 mx-auto border  border-info rounded-lg"
        >
          {this.state.padName}
        </h3>

        <div className="container-sm  col-lg-4 ">
          <div className="row ">
            <button
              onClick={this.handleChange}
              id="Agressive"
              className="drum-pad btn btn-outline-primary m-2 p-5 col"
            >
              Q
              <audio
                id="Q"
                className="clip"
                src={this.state.Q}
                preload="auto"
              ></audio>
            </button>
            <button
              onClick={this.handleChange}
              id="Bitch"
              className="drum-pad btn btn-outline-success m-2 p-5 col"
            >
              W
              <audio
                id="W"
                className="clip"
                src={this.state.W}
                preload="auto"
              ></audio>
            </button>
            <button
              onClick={this.handleChange}
              id="Clap"
              className="drum-pad btn btn-outline-warning m-2 p-5 col"
            >
              E
              <audio
                id="E"
                className="clip"
                src={this.state.E}
                preload="auto"
              ></audio>
            </button>
            <div className="w-100"></div>

            <button
              onClick={this.handleChange}
              id="Drop"
              className="drum-pad btn btn-outline-danger m-2 p-5 col"
            >
              A
              <audio
                id="A"
                className="clip"
                src={this.state.A}
                preload="auto"
              ></audio>
            </button>
            <button
              onClick={this.handleChange}
              id="Jerry"
              className="drum-pad btn btn-outline-info m-2 p-5 col"
            >
              S
              <audio
                id="S"
                className="clip"
                src={this.state.S}
                preload="auto"
              ></audio>
            </button>
            <button
              onClick={this.handleChange}
              id="Kick"
              className="drum-pad btn btn-outline-light m-2 p-5 col"
            >
              D
              <audio
                id="D"
                className="clip"
                src={this.state.D}
                preload="auto"
              ></audio>
            </button>
            <div className="w-100"></div>
            <button
              onClick={this.handleChange}
              id="Low-kick"
              className="drum-pad btn btn-outline-success m-2 p-5 col"
            >
              Z
              <audio
                id="Z"
                className="clip"
                src={this.state.Z}
                preload="auto"
              ></audio>
            </button>
            <button
              onClick={this.handleChange}
              id="Snare"
              className="drum-pad btn btn-outline-warning m-2 p-5 col"
            >
              X
              <audio
                id="X"
                className="clip"
                src={this.state.X}
                preload="auto"
              ></audio>
            </button>
            <button
              onClick={this.handleChange}
              id="Tom"
              className="drum-pad btn btn-outline-danger m-2 p-5 col"
            >
              C
              <audio
                id="C"
                className="clip"
                src={this.state.C}
                preload="auto"
              ></audio>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
