const InputField = ({ style, placeholder, name, value, required }) => {
  return (
    <input
      style={style}
      className="input"
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      required={required}
    />
  );
};

export default InputField;
