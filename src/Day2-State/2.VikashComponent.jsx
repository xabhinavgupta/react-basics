import { Component } from "react";

class StateWithCC2 extends Component {
  state = {
    counter: 10,
    vikasKaCounter: 5000,
    name: "Vikas",
  };

  onCounterUpdate = () => {
    //this.state.counter += 1;

    this.setState({
      counter: this.state.counter + 1,
    });
  };

  onCounterVCUpdate = () => {
    this.setState({
      vikasKaCounter: this.state.vikasKaCounter + 1,
    });
  };

  render() {
    return (
      <div>
        <p>
          Counter {this.state.counter} {this.state.vikasKaCounter}
        </p>
        <input type="text" />
        <button onClick={this.onCounterUpdate}>Increment</button>
        <button onClick={this.onCounterVCUpdate}>Increment VC</button>
      </div>
    );
  }
}

export default StateWithCC2;
