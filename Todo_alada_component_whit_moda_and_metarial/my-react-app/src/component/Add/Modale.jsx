import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Modal,
  TextField,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ShowData from "../ShowData/ShowData";
import {
  useAddLeaveMutation,
  useUpdateLeaveMutation,
} from "../../features/apiSlice";

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

const getInputData = JSON.parse(localStorage.getItem("setData")) || [];

const Modale = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputData, setInputData] = useState(getInputData);
  const [AddLeave, { isSuccess, isLoading, isError }] = useAddLeaveMutation();
  const [updateLeave] = useUpdateLeaveMutation();
  const { register, handleSubmit } = useForm("");

  // add data from input =================================================
  const navigate = useNavigate();

  const formSubmit = (data) => {
    const uniqueId = `${Date.now()}`;
    data.id = uniqueId;

    // // Create an array to store the file URLs
    // const fileUrls = [];
    // if (data.photo && data.photo.length > 0) {
    //   for (const file of data.photo) {
    //     // Create a URL for each selected file
    //     const fileUrl = URL.createObjectURL(file);
    //     fileUrls.push(fileUrl);
    //   }
    // }

    // // Add the file URLs to the data
    // data.photoUrls = fileUrls;

    let newInputData = [...inputData, data];
    // let dt = {
    //   store: "6566e648a8d45ce8cf3f0f6b",
    //   name: "Shawon",
    //   type: "EXPENSE",
    //   status: "ACTIVE",
    // };
    data.store = "6566e648a8d45ce8cf3f0f6b";
    // AddLeave(data);
    const updateObj = {
      _id: "656896299ce5da42f6198b42",
      merchant: "6566e648a8d45ce8cf3f0f67",
      store: "6566e648a8d45ce8cf3f0f6b",
      user: "6566e648a8d45ce8cf3f0f69",
      name: "Shawon Khan",
      type: "EXPENSE",
      status: "ACTIVE",
      createdAt: "2023-11-30T13:54:31.283Z",
      updatedAt: "2023-11-30T13:54:31.283Z",
    };

    updateLeave(updateObj);
    localStorage.setItem("setData", JSON.stringify(newInputData));

    // if (newInputData ) {
    // }

    setInputData(newInputData);

    // navigate("/showData");

    console.log(newInputData);

    //  reset();

    handleClose();
  };

  useEffect(() => {
    localStorage.setItem("setData", JSON.stringify(inputData));
  }, [inputData]);

  return (
    <div>
      <Container maxWidth="sm">
        <Button
          variant="contained"
          sx={{ justifyContent: "center" }}
          onClick={handleOpen}
        >
          open modal
        </Button>

        <Link to="/showData">
          <Button
            variant="contained"
            sx={{ justifyContent: "center", marginLeft: "5px" }}
          >
            go showdata page
          </Button>
        </Link>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={handleSubmit(formSubmit)}>
            <Box sx={style}>
              <Box
                sx={{
                  color: "red",
                  maxWidth: "100%",
                }}
              >
                <TextField
                  {...register("name")}
                  // {id: Math.random()}
                  fullWidth
                  label="Name"
                  id="fullWidth"
                />
              </Box>
              <Box
                sx={{
                  my: "9px",
                  maxWidth: "100%",
                }}
              >
                <TextField
                  {...register("type")}
                  fullWidth
                  label="Type"
                  id="fullWidth"
                />
              </Box>
              <Box
                sx={{
                  my: "9px",
                  maxWidth: "100%",
                }}
              >
                <TextField
                  {...register("status")}
                  type="text"
                  fullWidth
                  label="Status"
                  id="fullWidth"
                />
              </Box>
              {/* <Box
                sx={{
                  my: "9px",
                  maxWidth: "100%",
                }}
              >
                <TextField
                  {...register("age")}
                  type="number"
                  fullWidth
                  label="Write Age"
                  id="fullWidth"
                />
              </Box> */}
              {/* <Box
                sx={{
                  my: "9px",
                  maxWidth: "100%",
                }}
              >
                <input
                  {...register("photo")}
                  type="file"
                  accept="image/*"
                  id="photo"
                />
              </Box> */}
              <Box>
                <ButtonGroup
                  fullWidth
                  // disableElevation
                  variant="contained"
                  // aria-label="Disabled elevation buttons"
                >
                  <Button color="error" onClick={handleClose}>
                    close
                  </Button>
                  <Button type="submit" color="success">
                    save
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </form>
        </Modal>
      </Container>
    </div>
  );
};

export default Modale;
