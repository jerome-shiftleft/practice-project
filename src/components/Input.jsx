import { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Input = forwardRef(function Input({ label, inputType, ...props }, ref) {
  return (
    <>
      {inputType === "textarea" ? (
        <TextField ref={ref} multiline rows={4} size="small" label={label} {...props} />
      ) : inputType === "date" ? (
        <DatePicker label="Due Date" />
      ) : (
        <TextField ref={ref} size="small" label={label} {...props} />
      )}
    </>
  );
})

export default Input;
