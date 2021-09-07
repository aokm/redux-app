import { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';
import './App.css';

class App extends Component {
  // initialStateで初期化しているので必要なし
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 0 };
  // }

  // Action Createrで定義をして、Reducerで状態の変更を定義しているので必要なし
  // handlePlusButton = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  render() {
    const props = this.props;
    console.log(`props の値を出力：${JSON.stringify(props)}`);

    return (
      <>
        {/* <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button> */}
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({ value: state.count.value });
const mapStateToProps = (state) => {
  console.log(`mapStateToPropsのstateを出力：${JSON.stringify(state)}`);
  return { value: state.count.value };
};
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

// stateとactionを関連づける
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
