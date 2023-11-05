// import { data } from 'autoprefixer';
// import React, { useEffect, useState } from 'react';
// import { get, useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';

// const RegisterPage = () => {


//   const getInputData =JSON.parse(localStorage.getItem('value'))
  
//   const {register, handleSubmit, watch,formState: {errors}} = useForm()
//   const [inputData , setInputData] = useState(getInputData)

//   console.log(getInputData);


//   const onSubmit = data =>{
//       const newInputData = [...inputData, data]
//     setInputData(newInputData)
//   }



//   useEffect(()=>{
//     localStorage.setItem('value' , JSON.stringify(inputData))
//   },[inputData])



//     return (
//         <div>
      
//        <div className="hero min-h-screen bg-gray-200 ">
//   <div className="hero-content flex-col lg:flex-row-reverse">

//     <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-white">
       
//       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//         <p className='text-1xl text-info text-center font-bold' >REGISTER PAGE</p>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input  {...register("name",{required: true} )} {...register("name", { pattern: /^[A-Za-z]+ [a-zA-Z]+$/i })} placeholder="name" className="input bg-white input-bordered" />
//           {errors?.name?.type === "required" && (<span className='label-text-alt mt-2 text-red-600'>This field is required</span>)}
//           {errors?.name?.type === "pattern" && (<p className='label-text-alt mt-2 text-red-600'>Alphabetical characters only</p>)}
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input id='email' type='email'  {...register("email", {
//           required: "This field is required",
//           pattern: {
//             value: /\S+@\S+\.\S+/,
//             message: "Entered value does not match email format",
//           },
//         })} placeholder="email" className="input bg-white input-bordered" />
//           {errors?.email && (<span className='label-text-alt mt-2 text-red-600'>{errors.email.message}</span>)}
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input  id="password"
//         {...register("password", {
//           required: "This field is required",
//           minLength: {
//             value: 5,
//             message: "min length is 5",
//           },
//         })}
//         type="password" placeholder="password" className="input bg-white input-bordered" />

//           {errors?.password && (<span className='label-text-alt mt-2 text-red-600'>{errors.password.message}</span>)}
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">register now</button>
//         </div>
//         <label className="label">
//             <Link className='label-text-alt' to="/loginPage">Go login page</Link>
//           </label>
//       </form>
    
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default RegisterPage;