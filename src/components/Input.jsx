import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Input({ label, inputType, ...props }) {
  return (
    <>
      {inputType === "textarea" ? (
        <TextField multiline rows={3} size="small" label={label} {...props} />
      ) : inputType === "date" ? (
        <DatePicker label="Due Date" />
      ) : (
        <TextField size="small" label={label} {...props} />
      )}
    </>
  );
}

export default Input;
