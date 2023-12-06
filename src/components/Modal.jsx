import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openDialog() {
        //dialog.current.showModal();
        setOpen(true);
      },
    };
  });

  const handleClose = () => {
    setOpen(false);
  };

  return createPortal(
    <Dialog open={open} onClose={handleClose}>
      {/* <DialogTitle>Title</DialogTitle> */}
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
