const TouchKeyboard = ({ inputValue, setInputValue, length, className, passwordInput, disableZero, valueReader }) => {
  const inputType = passwordInput ? "password" : "text";

  return (
    <div className={`calculator-container ${className}`}>
      {valueReader && <ValueReader value={inputValue} />}
      <input type={inputType} className="calculator-input" value={inputValue || ""} readOnly />
      <KeyGenerator inputValue={inputValue} setInputValue={setInputValue} length={length} disableZero={disableZero} />
    </div>
  );
};

export default TouchKeyboard;
