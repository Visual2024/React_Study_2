import { useState, useEffect } from "react";

export const Text2 = () => {
  const [text, setText1] = useState("");

  const hadleText=(e)=>{
    setText1(e.target.value)

  }


  

  return (
    <div>
      <input type="text" onChange={hadleText}/>
      <p>{text}</p>
    </div>
  );
};
