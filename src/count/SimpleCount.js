import { Component } from "react";

class SimpleCountApp extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div className="default">
          count: {this.state.count}
          <br />
          <button onClick={this.handlePlusButton}>+1</button>
          <button onClick={this.handleMinusButton}>-1</button>
        </div>
      </>
    );
  }
}

export default SimpleCountApp;
