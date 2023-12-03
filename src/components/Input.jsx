import TextField from "@mui/material/TextField";

function Input({ label, textarea, ...props }) {
  return (
    <>
      {textarea ? (
        <TextField multiline size="small" label={label} {...props} />
      ) : (
        <TextField size="small" label={label} {...props} />
      )}
    </>
  );
}

export default Input;
