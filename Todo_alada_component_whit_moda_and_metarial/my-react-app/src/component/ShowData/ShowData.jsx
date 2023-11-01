import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Button,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditModal from "../EditModal/EditModal";
import { Link, useNavigate } from "react-router-dom";
true;

const ShowData = () => {
  const inputData = JSON.parse(localStorage.getItem("setData")) || [];
  const [state, setState] = useState(inputData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();

  // editD data fine =============================================

  const editHandler = (item, id) => {
    const editData = inputData.find((item) => {
      return item.id == id;
    });
    setSelectedItem(editData, item);
    setIsEditModalOpen(true);
  };

  // data update =======================================================
  const handleDataEdit = (e, data) => {
    e.preventDefault();
    const copyState = [...state];
    const index = copyState.findIndex((item) => item.id == data.id);
    copyState[index] = data;
    localStorage.setItem("setData", JSON.stringify(copyState));
    setState(copyState);
    setIsEditModalOpen(false);
  };

  // data delete =============================================================
  const deleteData = (id, item) => {
    const dataFilter = state.filter((item) => {
      return item.id != id;
    });
    // setState(localStorage.removeItem(dataFilter))
    localStorage.setItem("setData", JSON.stringify(dataFilter));
    setState(dataFilter);
    console.log(dataFilter);
  };

  // all data delete ==================================================

  const allDataDelete = () => {
    setState(localStorage.clear(inputData));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state?.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar
                    alt={`Image ${index}`}
                    src={`${item.photoUrls}`}
                    sx={{ width: 50, height: 50 }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.firstName}
                </TableCell>
                <TableCell align="right">{item.lastName}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.age}</TableCell>
                <EditModal
                  item={selectedItem}
                  isOpen={isEditModalOpen}
                  onClose={() => setIsEditModalOpen(false)}
                  // onSave={saveEditedItem}
                  handleDataEdit={handleDataEdit}
                />

                <TableCell align="right">
                  <Chip
                    component="button"
                    onClick={() => editHandler(item, item.id)}
                    label="Edit"
                    variant="primary"
                    color="primary"
                    item={selectedItem}
                  />
                </TableCell>
                <TableCell align="right">
                  <Chip
                    component="button"
                    onClick={() => deleteData(item.id, item)}
                    label="Delete"
                    variant="error"
                    color="error"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" spacing={2} sx={{ mt: "10px" }}>
        <Button
          onClick={allDataDelete}
          variant="danger"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Link to="/">
          <Button variant="contained" endIcon={<SendIcon />}>
            Go home page
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default ShowData;
