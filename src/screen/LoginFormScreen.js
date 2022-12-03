import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// LoginThunk
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { LoginThunk } from "../Reducer/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const LoginFormScreen = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { token, error } = useSelector((state) => state.authReducer);
console.log(token);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 useEffect(() => {
    if(token&&!error){
    Navigate("/attendance")  
    };
  }, [Navigate,token]);
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginThunk(formData));
    e.target.reset(); //add this line
    Navigate("/attendance");

  };
  
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-sm-12 text-start">
            <img src="images/icon.png" className="img-fluid" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-6 col-12 ">
            <img
              src="images/login_image.png"
              className="img-fluid h-100 w-100"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <form onSubmit={onSubmit} className="my-3 shadow py-5  px-5 ">
              <h4 className="text-center my-5 ">SignUp Form</h4>
              <div className="my-5  text-center input_container">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="Write Email Address"
                  required
                />
              </div>
              <div className="my-5  input_container">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                  placeholder="Write Password"
                  required
                />
                <small className="text-muted mx-2 ">
                  Your password must be 8 character
                </small>
              </div>
              <div className="my-5  py-2 text-center">
                <button className="btn btn-primary shadow">Log In</button>
              </div>

              <div className="mt-5 py-2 text-end  link_container">
                <p className="d-inline  text-muted">Don't have an account ? </p>
                <Link to="/" className="fw-bold">
                  SIGNUP HERE
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
