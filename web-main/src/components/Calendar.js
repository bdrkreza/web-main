import React from "react";

// TODO Convert to function component
export default class Parent extends React.Component {
  state = { message: "" };

  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };
  
  render() {
    return (
      <div>
        <Child1 parentCallback={this.callbackFunction} />
        <p> {this.state.message} </p>
      </div>
    );
  }
}

class Child1 extends React.Component {
  sendData = () => {
    this.props.parentCallback("Hey Popsie, How’s it going?");
  };
  render() {
    return;
  }
}
