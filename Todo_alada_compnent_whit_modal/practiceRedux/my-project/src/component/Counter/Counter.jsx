import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="p-5 shadow-lg  max-w-lg m-auto text-center rounded-lg mt-5">
      <h1 className="text-5xl text-black font-bold mb-20">{count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="btn me-2 btn-outline btn-info"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="btn me-2 btn-outline btn-success"
      >
        Decrement
      </button>
      <button onClick={()=>dispatch(incrementByAmount(5))} className="btn me-2 btn-outline btn-warning">Increment 5 </button>
      <button
        onClick={() => dispatch(reset())}
        className="btn btn-outline btn-secondary"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;




