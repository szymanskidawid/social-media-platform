const InputField = ({ style, placeholder, name, required }) => {
  return (
    <input
        style={style}
        className="input" 
        type="text" 
        placeholder={placeholder} 
        name={name} 
        required={required} />
  )
}

export default InputField
