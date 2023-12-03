import Input from "./Input";
import Button from '@mui/material/Button';

function NewProject() {
  return (
    <>
      <div id="content">
        <div className="input-fields">
          <Input label="Title"  />
          <Input label="Description" textarea />
          <Input label="Due Date"  />
        </div>
        <div className="action-buttons">
          <Button variant="contained" color="secondary">Cancel</Button>
          <Button variant="contained">Save</Button>
        </div>
      </div>
    </>
  )
}

export default NewProject;