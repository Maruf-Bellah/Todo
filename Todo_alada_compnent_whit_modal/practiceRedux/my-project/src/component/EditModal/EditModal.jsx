import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const EditModal = ({ isOpen, onClose, item , upDateData}) => {
  const [dataValue, setDataValue] = useState(item);

  useEffect(() => {
    setDataValue(item);
  }, [item]);
  console.log(item);

  return (
    <div className="bg-white">
      {/* <button className="btn" onClick={handleModal()}>
        open modal
      </button> */}
      <dialog open={isOpen} id="my_modal_4" className="modal">
        <div className="modal-box w-full max-w-full bg-white">
          {/* this div start here ============================================== */}
          <div className="px-5">
            <div className="">
              <div>
                <h1 className="text-4xl text-info text-center py-10 font-bold">
                  Submit Every Field
                </h1>
              </div>
              <div className="m-auto lg:w-10/12 w-full bg-gray-100 rounded-lg">
                <div className="card  w-full shadow-2xl">
                  <form
                    // onSubmit={handleSubmit(handleForm)}
                    className="card-body"
                  >
                    <div className="flex gap-5 w-full">
                      <div className="flex flex-col gap-5 w-full lg:flex-row">
                        <div className="grid flex-grow card rounded-box ">
                          <label className="label">
                            <span className=" text-">First Name</span>
                          </label>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-full input input-bordered bg-white"
                            value={dataValue?.firstName}
                            onChange={(e) => {
                              setDataValue({
                                ...dataValue,
                                firstName: e.target.value,
                              });
                            }}
                          />
                          {/* {errors.exampleRequired && (
                            <span>This field is required</span>
                          )} */}
                        </div>
                        {/* <div className="divider lg:divider-horizontal d-hide"></div> */}
                        <div className="grid flex-grow  card  rounded-box ">
                          <label className="label">
                            <span className="label-text">Last Name</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            // required
                            className="w-full input input-bordered bg-white"
                            value={dataValue?.lastName}
                            onChange={(e) => {
                              setDataValue({
                                ...dataValue,
                                lastName: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Write Email"
                        className="input input-bordered bg-white"
                        value={dataValue?.email}
                        onChange={(e) => {
                          setDataValue({
                            ...dataValue,
                            email: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Write Password"
                        className="input input-bordered bg-white"
                        value={dataValue?.password}
                        onChange={(e) => {
                          setDataValue({
                            ...dataValue,
                            password: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered bg-white"
                        value={dataValue?.password}
                        onChange={(e) => {
                          setDataValue({
                            ...dataValue,
                            password: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="flex lg:flex-nowrap flex-wrap gap-4">
                      <div>
                        <label className="label">
                          <span className="label-text">Start Meal</span>
                        </label>
                        <input
                          type="date"
                          className="input input-bordered bg-white"
                          value={dataValue?.date}
                          onChange={(e) => {
                            setDataValue({
                              ...dataValue,
                              date: e.target.value,
                            });
                          }}
                        />
                      </div>

                      <div>
                        <label className="label">
                          <span className="label-text">Take Meal</span>
                        </label>
                        <input
                          type="number"
                          className="input input-bordered bg-white"
                          value={dataValue?.number}
                          onChange={(e) => {
                            setDataValue({
                              ...dataValue,
                              number: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text">Number</span>
                        </label>

                        <input
                          type="tel"
                          className="input input-bordered bg-white"
                          value={dataValue?.phone}
                          onChange={(e) => {
                            setDataValue({
                              ...dataValue,
                              phone: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text">Bela</span>
                        </label>
                        <select
                          value={dataValue?.bela}
                          onChange={(e) => {
                            setDataValue({
                              ...dataValue,
                              bela: e.target.value,
                            });
                          }}
                          className="select select-bordered bg-white"
                        //   onChange={(e) => setValue("bela", e.target.value)}
                        >
                          <option disabled selected>
                            select your choice
                          </option>
                          <option>Cheese</option>
                          <option>Veggie</option>
                          <option>Pepperoni</option>
                          <option>Margherita</option>
                          <option>Hawaiian</option>
                        </select>
                      </div>
                    </div>
                    <div className=" w-100">
                      <button onClick={(e)=>upDateData(e, dataValue)} className="btn btn-primary w-full" >
                      update data
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* this div end here ============================================== */}

          <div></div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button onClick={onClose} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditModal;
