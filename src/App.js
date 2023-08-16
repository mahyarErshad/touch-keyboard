import { useState } from "react";
import TouchKeyboard from "./Components/TouchKeyboard/TouchKeyboard";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <TouchKeyboard inputValue={value} setInputValue={setValue} passwordInput={false} length={9} valueReader={true} disableZero={true} />
    </div>
  );
}

export default App;
