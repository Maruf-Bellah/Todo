import { Badge, Stack } from "react-bootstrap";
import "./ShowDetails.css";

const ShowDetails = ({
  inputData,
  deleteData,
  handleShowModal,
  deleteAll,
  setEdit,
}) => {
  const allListDetail = inputData.map((elem) => {
    return (
      <tr key={elem.id}  className="">
        <td>
          {elem.firstName} {elem.lastName}
        </td>
        <td>{elem.email}</td>
        <td> {elem.phone}</td>
        <td>{elem.cityName}</td>
        <td>
          <Badge
            onClick={() => handleShowModal(elem.id, elem, true)}
            className="pointer"
            bg="success"
          >
            EDIT
          </Badge>
        </td>
        <td>
          <Badge
            onClick={() => deleteData(elem.id)}
            className="pointer"
            bg="danger"
          >
            DELETE
          </Badge>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="w-100 px-2 mt-2 rounded pt-2 d-flex justify-content-between ">
        <table className="table  ">
          <thead>
            <tr className="text-uppercase ">
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{allListDetail}</tbody>
        </table>
      </div>

      <div className="text-center">
        <button
          onClick={deleteAll}
          className="btn btn-warning mt-2 text-uppercase "
        >
          you can delete all details
        </button>
      </div>
    </div>
  );
};

export default ShowDetails;
