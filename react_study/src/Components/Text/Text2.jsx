import { useState, useEffect } from "react";

export const Text2 = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  // Ciclos de Vida

  useEffect(() => {
    console.log("Montaje")
    
    return () => {
        console.log("Desmontaje")
    }
  }, []);

  useEffect(()=>{
    console.log("Modificado")
  },[text])

  return (
    <div>
      <hr />
      <input type="text" onChange={handleText} />
      <h2>{text}</h2>
    </div>
  );
};
