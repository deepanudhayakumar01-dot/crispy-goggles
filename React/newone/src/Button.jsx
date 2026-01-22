import React, { useState } from "react";
import Loin from "./Loin";

function Button() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Button</button>
      {/* <p> states is {show.toString()}</p> */}

      {show && <Loin />}
    </>
  );
}

export default Button;