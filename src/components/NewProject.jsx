import { useState, useEffect, useRef } from "react";
import DialogModal from "./Dialog";
import Modal from "./Modal";
import Input from "./Input";
import Button from "@mui/material/Button";

function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();  
  
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
      modal.current.open();
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
            
      <Modal ref={modal} />

      <div id="new-project" className="content">
        <div className="input-fields">
          <Input ref={title} label="Title" inputType="text" />
          <Input ref={description} label="Description" inputType="textarea" />
          <Input ref={dueDate} label="Due Date" inputType="date" />
        </div>
        <div className="action-buttons">
          <Button variant="contained" color="secondary">
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
