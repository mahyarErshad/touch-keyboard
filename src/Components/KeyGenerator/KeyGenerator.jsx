export default function KeyGenerator({ inputValue, setInputValue, length, disableZero }) {
  const disabledState = !inputValue || (length && inputValue.length < length.minLength);

  const keysData = ["1", "2", "3", { value: "تصحیح", className: "backspace" }, "4", "5", "6", { value: "لغو", className: "abort" }, "7", "8", "9", { value: "تایید", className: "enter", disabled: disabledState, type: "submit" }, "00", "0", "000"];

  const handleButtonPress = (key) => {
    if (key === "تصحیح") {
      if (!inputValue) return;
      setInputValue(inputValue.slice(0, -1));
    } else if (key === "لغو") {
      setInputValue("");
    } else if (key === "تایید") {
      alert(`Input value is: ${inputValue}`);
      setInputValue("");
    } else {
      if (!Number(inputValue) && disableZero && Number(key) === 0) return;
      if (length && inputValue.length === length.maxLength) return;
      setInputValue((prev) => prev + key);
    }
  };
  return (
    <div className="keyboard">
      <div className="grid">
        {keysData.map((key, keyIndex) => {
          const value = typeof key === "object" ? key.value : key;
          return (
            <button type={key.type || "button"} className={`key ${key.className || ""}`} key={keyIndex} disabled={key.disabled} onClick={() => key.onClick || handleButtonPress(value)}>
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
