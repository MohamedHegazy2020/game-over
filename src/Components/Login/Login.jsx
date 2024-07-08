import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

export default function Login({ getUserData }) {

function displayFgtPassAlret() {
  alert("معليش بقي ... اعمل حساب جديد 😂😂😂")
}


  let user = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  async function loginUser(values) {
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        getUserData();

        
        
        navigate("/home");


        
      }
    } catch (error) {
      $(".errMsg")
        .html(error.response.data.message)
        .fadeIn(1000, function () {
          
            $(".errMsg").fadeOut(1000 , ()=>{removeLoginLoading()});
          
        });
    }
  }

  let formik = useFormik({
    initialValues: user,
    onSubmit: function (values) {
      loginUser(values);
    },
    validate: function (values) {
      const errors = {};

      if (!values.email.includes("@")) {
        errors.email = "enter a valid email";
      }
      if (
        values.password.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,12}$/
        )
      ) {
        errors.password = "enter a valid password";
      }

      return errors;
    },
  });
// set login loader
  function setLoginLoading() {
    $('.login').fadeOut(100 , ()=>{$(".fa-spin").fadeIn(100);} )
    ;
  }
  // remove login loader
  function removeLoginLoading() {
    
    $(".fa-spin").fadeOut(100 , ()=>{$(".login").fadeIn(100, () => {});});
  }

  return (
    <>
      <div className="container my-5 shadow">
        <div className="row bg-secondary bg-opacity-25">
          <div className="col-md-6 p-0">
            <img
              src={require("../../img/gaming.ebaf2ffc84f4451d.jpg")}
              className="w-100 h-100"
              alt=""
            />
          </div>
          <div className="col-md-6 px-5 text-center">
            <div className="text-center">
              {" "}
              <img
                src={require("../../img/logo.png")}
                className="w-25  "
                alt=""
              />
            </div>
            <h2 className="text-white-50">Log in to GameOver</h2>
            <div
              class="alert alert-danger errMsg text-center mt-2"
              role="alert"
              style={{ display: "none" }}
            ></div>

            <form action="" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                id="email"
                className="form-control mt-3 "
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.email && formik.touched.email ? (
                <div className="alert alert-danger text-center mt-2">
                  {formik.errors.email}
                </div>
              ) : (
                ""
              )}

              <input
                type="password"
                id="password"
                className="form-control mt-3"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="alert alert-danger text-center">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}

              <button
                className="btn btn-dark w-100 text-light mt-3"
                type="submit"
                onClick={setLoginLoading}
              >
                <span className="login me-2 ">Login</span>

                <i
                  className="fa-solid fa-spinner fa-spin "
                  style={{ display: "none" }}
                ></i>
              </button>
            </form>

            <div className=" mt-3 border-white opacity-25 border-top  "></div>
            <div className=" mt-3 ">
              <Link className="text-capitalize d-block text-decoration-none mb-1" onClick={displayFgtPassAlret}>
                {" "}
                forget password?{" "}
              </Link>
              <span className="text-white-50">Not a member yet</span>{" "}
              <Link className="text-capitalize text-decoration-none" to={"/register"}>
                {" "}
                create Account{">"}{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
