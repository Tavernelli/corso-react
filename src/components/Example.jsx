import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Example() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p className="mb-3">Conteggio: {count}</p>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment +
      </button>
      <span> </span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement -
      </button>
    </div>
  );
}
