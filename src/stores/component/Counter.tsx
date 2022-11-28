import type { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
// actions
import { increment, decrement, incrementByAmount } from "../slice/counterSlice";
import { useState } from "react";

const Counter = () => {
  // useSelector .. 状態にアクセスするHOOKS
  // counter .. Sliceではなく, storeのreducerのプロパティのこと
  // .value で今の状態にアクセスしている！！
  const count = useSelector((state: RootState) => state.counter.value);
  // dispatch(actions)
  const dispatch = useDispatch();
  // incrementByAmount のpayloadデータの作成
  const [incrementAmount, setIncrementAmount] = useState(2);
  return (
    <div>
      <h1 className="text-blue-600">
        現在のカウント値は
        <span className="underline text-red-400">{count}</span>です
      </h1>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
        className="bg-slate-100"
      />
      <div>
        <button
          className="p-6 bg-pink-500 text-lg"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="p-6 bg-blue-500 text-lg  ml-10"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="p-6 bg-lime-500 text-lg  ml-10"
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Counter;
