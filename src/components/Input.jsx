import { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Input = forwardRef(function Input({ label, inputType, ...props }, ref) {
  // replace ref={ref} with inputRef={ref} when forwarding ref in material ui
  return (
    <>
      {inputType === "textarea" ? (
        <TextField inputRef={ref} multiline rows={4} size="small" label={label} {...props} />
      ) : inputType === "date" ? (
        <DatePicker inputRef={ref} label="Due Date" />
      ) : (
        <TextField inputRef={ref} size="small" label={label} {...props} />
      )}
    </>
  );
})

export default Input;
