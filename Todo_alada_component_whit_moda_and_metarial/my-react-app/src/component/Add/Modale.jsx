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
                  {...register("firstName", {
                    required: "this is required",
                    maxLength: 20,
                  })}
                  // {id: Math.random()}
                  fullWidth
                  label="First Name"
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
                  {...register("lastName", { required: true, maxLength: 20 })}
                  fullWidth
                  label="Last Name"
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
                  {...register("email", { required: true })}
                  type="email"
                  fullWidth
                  label="Write Email"
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
                  {...register("age", { min: 10, max: 99 })}
                  type="number"
                  fullWidth
                  label="Write Age"
                  id="fullWidth"
                />
              </Box>
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
