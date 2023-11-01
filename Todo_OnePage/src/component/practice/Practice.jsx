import React, { useEffect, useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

import "./Practice.css";

// getLocalStorage =================================

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Practice = () => {
  const [inputDates, setInputDates] = useState({});
  const [state, setState] = useState(getLocalStorage());
  const [toggle, setToggle] = useState(true);
  const [indexTow, setIndexTow] = useState("");
  // console.log(indexTow);

  // add data =============================================

  const addData = () => {
    if (!inputDates) {
      // setInputDates(' ')
      alert("hello bro");
    } else if (inputDates && !toggle) {
      let copyEdit = [...state];
      copyEdit[indexTow] = inputDates;
      setState([...copyEdit]);

      setInputDates({ name: "" });
      // console.log(copyEdit);
      setToggle(true);
    } else {
      setState([...state, inputDates]);
      
      setInputDates({ name: "" });
    }
  };

  // edit data ================================================
  const editData = (id, indexTow) => {
    let findEditData = state.find((elem) => {
      return elem.id == id;
    });
    console.log(findEditData);

    // console.log(indexTow, id);

    setInputDates(findEditData);

    setIndexTow(indexTow);
    setToggle(false);
  };

  // delete data =================================================

  const deleteData = (id) => {
    const deleteItem = state.filter((elem) => {
      return elem.id !== id;
    });
    setState(deleteItem);
  };

  // delete all =======================================================

  const deleteAll = () => {
    setState([]);
  };

  // add data to localStorage===========================================

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          placeholder="something write now"
          aria-describedby="inputGroup-sizing-lg"
          name="name"
          value={inputDates.name}
          onChange={(e) => {
            let name = e.target.name;
            setInputDates({
              ...inputDates,
              [name]: e.target.value,
              id: Math.random(),
            });
          }}
        />
        {toggle ? (
          <button
            onClick={addData}
            className="input-group-text  text-success fs-2 pe-auto"
            id="inputGroup-sizing-lg"
          >
            <MdAddToPhotos />
          </button>
        ) : (
          <button
            onClick={addData}
            className="input-group-text  text-success fs-2 pe-auto"
            id="inputGroup-sizing-lg"
          >
            <BiSolidMessageSquareEdit />
          </button>
        )}
      </div>
      {state.map((elem, index) => {
        return (
          <div
            key={elem.id}
            className="d-flex text-dark justify-content-between  align-items-center bg-white rounded mt-2 p-1"
          >
            <div className="d-inline-block  ps-2">{elem.name}</div>
            <div>
              <span
                onClick={() => editData(elem.id, index)}
                className="edits fs-5 me-2 text-info"
              >
                <FaEdit />
              </span>

              <span
                onClick={() => deleteData(elem.id)}
                className="deletes fs-4 text-danger"
              >
                <MdDeleteForever />
              </span>
            </div>
          </div>
        );
      })}

      <div className="mt-3">
        <button onClick={deleteAll} type="button" className="btn btn-danger">
          DELETE ALL <MdAutoDelete />
        </button>
      </div>
    </div>
  );
};

export default Practice;
