import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm();



  const onSubmit = data => console.log(data);
  console.log(watch('example'));


    return (
        <div className="hero min-h-screen bg-gray-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
    
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <form   onSubmit={handleSubmit(onSubmit)} className="card-body">
            <p className='text-1xl text-info text-center font-bold' > LOGIN PAGE</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input id='email' type='email'  {...register("email", {
          required: "This field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        })} placeholder="email" className="input bg-white input-bordered" />
          {errors?.email && (<span className='label-text-alt mt-2 text-red-600'>{errors.email.message}</span>)}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input  id="password"
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 5,
            message: "min length is 5",
          },
        })}
        type="password" placeholder="password" className="input bg-white input-bordered" />

          {errors?.password && (<span className='label-text-alt mt-2 text-red-600'>{errors.password.message}</span>)}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login now</button>
              </div>
              <label className="label">
                  <Link to="/registerPage" className="label-text-alt">Go register page</Link>
                </label>
            </form>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;