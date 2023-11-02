import React, { useState } from "react";
import EditModal from "../EditModal/EditModal";

const List = () => {
  const inputData = JSON.parse(localStorage.getItem("listData")) || [];

  const [state, setState] = useState(inputData);
  const [findData, setFindData] = useState(null);

  const [open, setOpen] = useState(false);

  const [selectAll , setSelectAll] = useState(false);
  const [individualChecks , setIndividualChecks] = useState({})

  // find data by id ===================================================

  const handleModal = (id, item) => {
    const dataFind = state.find((item) => {
      return item.id === id;
    });
    setFindData(dataFind, item);
    setOpen(true);
  };

  // update data =============================================

  const upDateData = (e, data) => {
    e.preventDefault();
    const dataFindIndex = [...state];
    const index = dataFindIndex.findIndex((item) => item.id == data.id);
    dataFindIndex[index] = data;

    localStorage.setItem("listData", JSON.stringify(dataFindIndex));
    setState(dataFindIndex);
    setOpen(false);
  };

  //   delete data ===============================================

  const deleteButton = (id, item) => {
    const deleteData = state.filter((item) => {
      return item.id != id;
    });
    const confirm = window.confirm("Are you sure ");
    if (confirm) {
      localStorage.setItem("listData", JSON.stringify(deleteData));
    setState(deleteData);
    }

    // console.log(deleteData);
  };



    // Toggle 'select all ' checkboz 
    const toggleSelectAll = () => {
      setSelectAll(!selectAll)
      setIndividualChecks({})
    }

    // Toggle individual checkboxes 

    const toggleIndividualCheck = (id)=>{
      setIndividualChecks((prevChecks)=>({
        ...prevChecks,
        [id]: !prevChecks[id],
      }));

    }


  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                />
              </label>
            </th>
            <th>Phots & Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Take Meal</th>
            <th>Number</th>
            <th>Bela</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {state.map((item) => (
            <tr key={item.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" 
                       checked={selectAll || individualChecks[item.id]}
                       onChange={()=> toggleIndividualCheck(item.id)}
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://picsum.photos/200" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.firstName}</div>
                    <div className="text-sm opacity-50">{item.lastName}</div>
                  </div>
                </div>
              </td>
              <td>
                {item.email}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {item.password}
                </span>
              </td>
              <td>{item.date}</td>
              <td>{item.number}</td>
              <td>{item.phone}</td>
              <td>{item.bela}</td>

              {
                <EditModal
                  isOpen={open}
                  onClose={() => setOpen(false)}
                  item={findData}
                  upDateData={upDateData}
                />
              }

              <th>
                <button
                  onClick={() => handleModal(item.id, item)}
                  className="btn btn-success btn-xs"
                  //   onClose={()=> setOpen(false)
                >
                  edit
                </button>
              </th>
              <th>
                <button
                  onClick={() => deleteButton(item.id, item)}
                  className="btn btn-danger btn-xs"
                >
                  delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
