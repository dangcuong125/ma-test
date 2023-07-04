import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { isOpenEditForm, setIsOpenEditForm } from "../address-common/slice";
import { useDispatch } from "@/common/redux/store";

export default function AddressEdit() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpenEditForm);

  const handleClose = () => {
    dispatch(setIsOpenEditForm(false));
  };
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
