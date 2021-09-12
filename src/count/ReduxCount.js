import { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/actions';

class ReduxCount extends Component {
  render() {
    const props = this.props;
    console.log(`props の値を出力：${JSON.stringify(props)}`);

    return (
      <>
        <div className="default">
          count: {props.value}
          <br />
          <button onClick={props.increment}>+1</button>
          <button onClick={props.decrement}>-1</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(`mapStateToPropsのstateを出力：${JSON.stringify(state)}`);
  return { value: state.count.value };
};

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });
// 省略記法
const mapDispatchToProps = { increment, decrement };

// stateとactionを関連づける
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCount);
