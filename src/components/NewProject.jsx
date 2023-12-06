import { useRef } from "react";
import Input from "./Input";
import Button from '@mui/material/Button';

function NewProject() {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  return (
    <>
      <div id="new-project" className="content">
        <div className="input-fields">
          <Input ref={title} label="Title" inputType="text"  />
          <Input ref={description} label="Description" inputType="textarea" />
          <Input ref={dueDate} label="Due Date" inputType="date" />
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