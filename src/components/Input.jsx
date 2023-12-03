import TextField from "@mui/material/TextField";

function Input({ label, textarea, ...props }) {
  return (
    <>
      <p>        
        {textarea ? (
          <TextField multiline size="small" label={label} {...props} />
        ) : (
          <TextField size="small" label={label} {...props} />
        )}
      </p>
    </>
  );
}

export default Input;
