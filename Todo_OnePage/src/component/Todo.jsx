import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { MdOutlineAddTask } from "react-icons/md";
import { TbEditCircle } from "react-icons/tb";
import "./Todo.css";

// to get the data for LS ==============================
const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState({});
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [index, setIndex] = useState("");

  // inpuit theke data newa=============================

  const addItem = (e) => {
    if (!inputData) {
      alert("plzz fill data");
    } else if (inputData && !toggleSubmit) {
      // edit er kaj====================================
      let copyItem = [...items];
      copyItem[index] = inputData;
      setItems([...copyItem]);

      setInputData({ name: "" });
      setToggleSubmit(true);
    } else {
      // add er kaj======================================
      setItems([...items, inputData]);
      setInputData({ name: "" });
    }
  };

  /// delete item=========================================
  const deleteItem = (id) => {
    const upDateItem = items.filter((item) => {
      return item.id !== id;
    });
    setItems(upDateItem);
  };

  // edit options==========================================
  const editItem = (id, index) => {
    const findEditData = items.find((elem) => {
      return elem.id == id;
    });
    setToggleSubmit(false);

    setInputData(findEditData);

    setIndex(index);
  };

  // delete all item========================================
  const removeAll = () => {
    setItems([]);
    // console.log(setItems());
  };

  // add data to localStorage================================
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <div className="input-group mb-3  ">
        <input
          type="text"
          className="form-control"
          placeholder="writing something"
          aria-label="Example text  with button addon"
          aria-describedby="button-addon1"
          name="name"
          value={inputData.name}
          onChange={(e) => {
            let name = e.target.name;
            setInputData({
              ...inputData,
              [name]: e.target.value,
              id: new Date().getTime().toString(),
            });
          }}
        />

        {toggleSubmit ? (
          <button
            className="btn text-white btn-success btn-outline-success"
            type="button"
            id="button-addon1"
            onClick={addItem}
          >
            ADD <MdOutlineAddTask />
          </button>
        ) : (
          <button
            className="btn btn-warning text-dark btn-outline-warning"
            onClick={addItem}
            type="button"
            id="button-addon1"
            // onClick={addIt em}
          >
            EDIT <TbEditCircle />
          </button>
        )}
      </div>

      <div className="showItem">
        {items.map((elem, index) => {
          return (
            <div className="eachItem rounded pt-2 pe-2 ps-2 mt-2" key={elem.id}>
              <div>
                <p>{elem.name}</p>
              </div>
              <div className="d-flex">
                <p
                  onClick={() => editItem(elem.id, index)}
                  className="edit icons me-2"
                >
                  <BiEdit />
                </p>
                <p
                  onClick={() => deleteItem(elem.id)}
                  className="delete icons "
                >
                  <MdDelete />
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2">
        <button onClick={removeAll} className="badge text-bg-danger py-2">
          Delete All{" "}
        </button>
      </div>
    </div>
  );
};

export default Todo;
