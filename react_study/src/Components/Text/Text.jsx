import { useState } from "react";
import { Text2 } from "./Text2";

export const Text = () => {
  const [show, setShow] = useState(false);

  function hadlerShow() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={hadlerShow}>
        {
        show === true 
        ? <p>Ocultar </p> 
        : <p> Mostrar</p>
        }
      </button>
      {show === true && <Text2 />}
    </div>
  );
};
