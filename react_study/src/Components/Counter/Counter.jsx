import { useState } from "react";

export const Counter = () => {

  const [counter, setCounter] = useState(0)

  const sumar = () => {
    setCounter(counter + 1)
  }

  const restar = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <div>
      <h2>{counter}</h2>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar} limited={0} >Restar</button>
    </div>
  );
};
