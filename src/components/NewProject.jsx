import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Button from "@mui/material/Button";

function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [dialogTitle, setDialogTitle] = useState();
  const [dialogContent, setDialogContent] = useState();

  function handleSave() {
    console.log("saving!");
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      console.log("validation error!");
      setDialogTitle('Validation Error!');
      setDialogContent('Please check the input fields.');
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    title.current.value = null;
    description.current.value = null;
    dueDate.current.value = null;
  }

  return (
    <>
      <Modal ref={modal} title={dialogTitle}>
        <span className="">{dialogContent}</span>
      </Modal>

      <div id="new-project" className="content">
        <div className="input-fields">
          <Input ref={title} label="Title" inputType="text" />
          <Input ref={description} label="Description" inputType="textarea" />
          <Input ref={dueDate} label="Due Date" inputType="date" />
        </div>
        <div className="action-buttons">
          <Button onClick={onCancel} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default NewProject;
