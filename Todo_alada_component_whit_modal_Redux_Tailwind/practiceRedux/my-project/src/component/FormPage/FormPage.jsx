import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const inputData = JSON.parse(localStorage.getItem('listData')) || [] ;

  const [formData, setFormData] = useState(inputData);
  console.log(formData);
  const navigate = useNavigate()

  const handleForm = (data) => {
    const newId = `${Date.now()}`;
    data.id = newId;
    const newData = [...formData, data];
    setFormData(newData);
    // console.log(newData);

    // navigate("/list")
  };

  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(formData));
  }, [formData]);


  return (
    <div className="px-5">
      <div className="">
        <div>
          <h1 className="text-4xl text-info text-center py-10 font-bold">
            Submit Every Field
          </h1>
        </div>
        <div className="m-auto lg:w-10/12 w-full bg-gray-100 rounded-lg">
          <div className="card  w-full shadow-2xl">
            <form onSubmit={handleSubmit(handleForm)} className="card-body">
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
                      {...register("firstName", {
                        required: "exampleRequired",
                      })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
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
                      {...register("lastName")}
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
                  // required
                  {...register("email")}
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
                  // required
                  {...register("password")}
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
                  // required
                  {...register("password")}
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
                    {...register("date")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Take Meal</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered bg-white"
                    {...register("number")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Number</span>
                  </label>

                  <input
                    type="tel"
                    className="input input-bordered bg-white"
                    {...register("phone")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Bela</span>
                  </label>
                  <select
                    {...register("bela")}
                    className="select select-bordered bg-white"
                    onChange={(e) => setValue("bela", e.target.value)}
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
                <input type="submit" className="btn btn-primary w-full" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
