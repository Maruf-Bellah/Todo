import React, { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Modal, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const EditModal = ({ isOpen, onClose, item, handleDataEdit }) => {
  // console.log(item);

  const [editedItem, setEditedItem] = useState(item);
  // console.log(editedItem);
  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  // const handleDataEdit = (e) => {
  //   e.preventDefault()
  //   const show = editedItem;

  //   setEditedItem({...show});

  //   onClose();

  //   console.log( show);
  // };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "5px",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form>
        <Box sx={style}>
          <Box
            sx={{
              color: "red",
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="First Name"
              id="fullWidth"
              value={editedItem?.firstName}
              onChange={(e) => {
                setEditedItem({ ...editedItem, firstName: e.target.value });
                // console.log(editedItem);
              }}
            />
          </Box>
          <Box
            sx={{
              my: "9px",
              maxWidth: "100%",
            }}
          >
            <TextField
              //   {...register("lastName", { required: true, maxLength: 20 })}
              fullWidth
              label="Last Name"
              id="fullWidth"
              value={editedItem?.lastName}
              onChange={(e) => {
                setEditedItem({ ...editedItem, lastName: e.target.value });
                // console.log(editedItem);
              }}
            />
          </Box>
          <Box
            sx={{
              my: "9px",
              maxWidth: "100%",
            }}
          >
            <TextField
              //   {...register("email", { required: true })}
              type="email"
              fullWidth
              label="Write Email"
              id="fullWidth"
              value={editedItem?.email}
              onChange={(e) => {
                setEditedItem({ ...editedItem, email: e.target.value });
                // console.log(editedItem);
              }}
            />
          </Box>
          <Box
            sx={{
              my: "9px",
              maxWidth: "100%",
            }}
          >
            <TextField
              //   {...register("age", { min: 10, max: 99 })}
              type="number"
              fullWidth
              label="Write Age"
              id="fullWidth"
              value={editedItem?.age}
              onChange={(e) => {
                setEditedItem({ ...editedItem, age: e.target.value });
                // console.log(editedItem);
              }}
            />
          </Box>

          <Box>
            <ButtonGroup fullWidth variant="contained">
              <Button onClick={onClose} color="error">
                close
              </Button>
              <Button
                onClick={(e) => handleDataEdit(e, editedItem)}
                type="submit"
                color="success"
              >
                save
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

export default EditModal;
