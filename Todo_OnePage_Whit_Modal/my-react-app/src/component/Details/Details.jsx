import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Col, Row } from "react-bootstrap";
import ShowDetails from "../Modal/ShowDetails";

// get data from localStorage =====================================

const getLocalStorage = () => {
  const list = localStorage.getItem("details");
  if (list) {
    return JSON.parse(localStorage.getItem("details"));
  } else {
    return [];
  }
};

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  // input data make array ==================================================

  const [inputData, setInputData] = useState(() => {
    const localData = getLocalStorage();
    return Array.isArray(localData) ? localData : [];
  });

  // editButton  modal and data Show on display ===========================================

  const handleShowModal = (id, item, isEdit) => {
    const editData = inputData.find((item) => {
      return item.id == id;
    });
    setData(editData);
    setId(id);
    setShowModal(true);
    setEdit(isEdit);
  };

  // bring data from input by oneChange =========================================
  const handleInputChange = (e) => {
    setData({
      ...data,
      id: Math.random(),
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  // modal off by closeButton ====================================================
  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (data) => {
    // add data on display =================================================

    if (!edit) {
      setInputData((prevInputData) => [...prevInputData, data]);
    } else {
      // edit data on display ================================================

      const findInd = inputData.findIndex((item) => item.id == id);
      const copyData = [...inputData];
      copyData[findInd] = data;
      setInputData([...copyData]);
      // console.log(copyData[findInd]);
    }
    handleHideModal();
  };

  // delete data from table =========================================================

  const deleteData = (id) => {
    const deleteItem = inputData.filter((item) => item.id !== id);
    const confirmDelete = window.confirm("Are you sure ?");
    if (confirmDelete) {
      setInputData(deleteItem);
    }
    // console.log(deleteItem);
  };

  // deleteAll data from button =================================================

  const deleteAll = () => {
    const confirm = window.confirm("Are you sure ? ");
    if (confirm) {
      setInputData([]);
    }
  };

  // set data in localStorage ===================================================

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(inputData));
  }, [inputData]);

  return (
    <div>
      <div className="text-start">
        <Button className="text-uppercase " onClick={handleShowModal}>
          Open Modal
        </Button>
      </div>
      <ModalCode
        showModal={showModal}
        onHide={handleHideModal}
        onSubmit={handleFormSubmit}
        editData={data}
        handleInputChange={handleInputChange}
      />
      {inputData.length > 0 && (
        <ShowDetails
          deleteData={deleteData}
          handleShowModal={handleShowModal}
          inputData={inputData}
          deleteAll={deleteAll}
          setEdit={setEdit}
        />
      )}
    </div>
  );
};

export default ParentComponent;

const ModalCode = ({
  showModal,
  onHide,
  onSubmit,
  editData,
  handleInputChange,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(editData);
  };

  return (
    <Modal show={showModal} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <h2 className="text-uppercase text-center">Fill out the form</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="firstName"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={editData?.firstName}
                onChange={(e) => handleInputChange(e)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="lastName"
                id="lastName"
                name="lastName"
                placeholder="last name"
                value={editData?.lastName}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-2" as={Col} md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={editData?.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mt-2" as={Col} md="6">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={editData?.password}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mt-2" as={Col} md="6">
              <Form.Label>Phone </Form.Label>
              <Form.Control
                required
                type="tel"
                id="phone"
                name="phone"
                placeholder="phone"
                value={editData?.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mt-2" as={Col} md="6">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="cityName"
                id="cityName"
                name="cityName"
                placeholder="City name"
                value={editData?.cityName}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Button
            className="w-100 text-uppercase"
            onClick={() => handleSubmit}
            type="submit"
          >
            Submit all form
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
