import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="hero min-h-screen bg-gray-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
    
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <form className="card-body">
            <p className='text-1xl text-info text-center font-bold' > LOGIN PAGE</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input bg-white input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input bg-white input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
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