import { TextField } from "@mui/material";

const InputField = ({ name, placeholder, value, required }) => {
  return (
    <TextField
      name={name}
      placeholder={placeholder}
      variant="outlined"
      margin="normal"
      value={value}
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "white",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "black",
        },
      }}
      required={required}
    />
    /*<input
      style={style}
      className="input"
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      required={required}
    />*/
  );
};

export default InputField;
