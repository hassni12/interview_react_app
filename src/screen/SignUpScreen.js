import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-labelled";
import "react-phone-input-labelled/dist/style.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


import { RegisterUser } from "../Reducer/auth";
// RegisterUser
export const SignUpScreen = () => {
  const [visible, setvisible] = useState(0);
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    RegisterUser(formData);
    toast.success("Successfully Register ");
    e.target.reset();
    Navigate('/login')
  };
  return (
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
          {visible === 0 ? (
            <form action="" className="my-3 shadow py-5  px-5 ">
              <h4 className="text-center my-5 ">SignUp Form</h4>
              <div className="my-5 text-center  input_container">
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={(e) => handleChange(e)}
                  placeholder="write First Name"
                  required
                />
              </div>
              <div className="my-5  text-center input_container">
                <input
                  type="text"
                  name="last_name"
                  onChange={(e) => handleChange(e)}
                  value={formData.last_name}
                  placeholder="write Last Name"
                  required
                />
              </div>
              <div className="my-5  py-2 text-center">
                <button
                  className="btn btn-primary shadow"
                  onClick={() => {
                    setvisible(1);
                  }}
                >
                  Next Step <AiOutlineArrowRight />{" "}
                </button>
              </div>

              <div className="mt-5 py-2 text-end  link_container">
                <p className="d-inline  text-muted">
                  Already have an account ?{" "}
                </p>
                <Link to="/login" className="fw-bold">
                  LOGIN HERE
                </Link>
              </div>
            </form>
          ) : visible === 1 ? (
            <form action="" className="my-3 shadow py-5  px-5 ">
              <h4 className="text-center my-5 ">SignUp Form</h4>
              <div className="my-5 text-center d-flex input_container">
                {/* <input type="text" class="form-control" id="ec-mobile-number" aria-describedby="emailHelp" placeholder="91257888" /> */}
                <select className="form-group">
                  <option>+880</option>
                  <option>+92</option>
                  <option>+91</option>
                </select>
                <input
                  type="text"
                  name="phone_number"
                  onChange={(e) => handleChange(e)}
                  value={formData.phone_number}
                  placeholder="1xxxxxxxx"
                  required
                />
              </div>
              <div className="my-5  text-center input_container">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  value={formData.email}
                  placeholder="Write Email Address"
                  required
                />
              </div>
              <div className="my-5  py-2 text-center">
                <Link
                  type="btn"
                  className="btn text-muted"
                  onClick={() => {
                    setvisible(0);
                  }}
                >
                  {" "}
                  Back
                </Link>
                <Link
                  onClick={() => {
                    setvisible(2);
                  }}
                  className="btn btn-primary ms-5 shadow"
                >
                  Next Step <AiOutlineArrowRight />{" "}
                </Link>
              </div>
            </form>
          ) : visible === 2 ? (
            <form onSubmit={onSubmit} className="my-3 shadow py-5  px-5 ">
              <h4 className="text-center my-5 ">SignUp Form</h4>
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

              <div className="my-5  py-2 text-cener">
                <Link
                  type="btn"
                  className="btn text-muted"
                  onClick={() => {
                    setvisible(1);
                  }}
                >
                  {" "}
                  Back
                </Link>
                <button className="btn btn-primary px-3 py-2 ms-5  shadow">
                  Sign Up
                </button>
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </section>
  );
};
