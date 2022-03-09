import React, { useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState("type a message on the input above");

  const handleChange = (e: any): void => {
    setMessage(e.target.value);
  };

  const handleFocus = (
    e: React.FocusEventHandler<HTMLInputElement> | undefined
  ): void => {
    console.log("focused!", e.target.value);
  };

  return (
    <>
      <p>Below, an input.</p>
      <input onChange={handleChange} onFocus={handleFocus} />
      <p> That prints: {message}</p>
    </>
  );
};

export default App;
