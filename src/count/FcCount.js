import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/actions";

const FcCount = () => {
  const counterSelector = (state) => state.count.value;
  const initialCount = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <div className="default">
      <h1>FcCount</h1>
      count: {initialCount}
      <br />
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};

export default FcCount;
