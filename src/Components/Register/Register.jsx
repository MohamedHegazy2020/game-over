import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import reg from "./Rigister.module.css";

export default function Register() {
  let user = {
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  };
  const navigate = useNavigate();

  async function addNewUser(values) {
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      if (data.message === "success") {
        $(".succMsg")
          .html("Congratulations")
          .fadeIn(1000, function () {
            setTimeout(() => {
              $(".succMsg").fadeOut(1000);
            }, 2000);
            navigate("/login");
          });
      }
    } catch (error) {
      $(".errMsg")
        .html(error.response.data.message)
        .fadeIn(1000, function () {
          setTimeout(() => {
            $(".errMsg").fadeOut(1000);
          }, 2000);
        });
    }
  }

  let formik = useFormik({
    initialValues: user,
    onSubmit: function (values) {
      addNewUser(values);
    },
    validate: function (values) {
      const errors = {};

      if (!values.name.match(/^[a-zA-Z ]{6,10}$/)) {
        errors.name =
          "your name should be more than 6 chars and less than 10 chars ";
      }

      if (!values.phone.match(/^(02)?01[0125][0-9]{8}$/)) {
        errors.phone = "your phone number should be egyptian";
      }

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
      if (values.password !== values.rePassword) {
        errors.rePassword = "your repasswod doesn't match";
      }

      return errors;
    },
  });

  return (
    <>
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
              <h2 className="text-center text-white-50 ">Registeration Form</h2>

              <div
                className="alert alert-danger text-center errMsg"
                style={{ display: "none" }}
              ></div>
              <div
                className="alert alert-success text-center succMsg"
                style={{ display: "none" }}
              ></div>

              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="row gx-5 justify-content-between"
              >
                <input
                  type="text"
                  id="fn"
                  className={" mt-3  col-md-5 d-inline " + reg.formControlUser}
                  placeholder="first name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <input
                  type="text"
                  id="l"
                  className={" mt-3  col-md-5 d-inline " + reg.formControlUser}
                  placeholder="last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="alert p-0 alert-danger text-center col-md-5">
                    {formik.errors.name}
                  </div>
                ) : (
                  ""
                )}

                {formik.errors.name && formik.touched.name ? (
                  <div className="alert p-0 alert-danger p-0 text-center col-md-5">
                    {formik.errors.name}
                  </div>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  id="email"
                  className={" mt-3 w-100 " + reg.formControlUser}
                  placeholder="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert alert-danger p-0 text-center">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}

                <input
                  type="text"
                  id="phone"
                  className={" mt-3 w-100 " + reg.formControlUser}
                  placeholder="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <div className="alert alert-danger p-0 text-center">
                    {formik.errors.phone}
                  </div>
                ) : (
                  ""
                )}

                <input
                  type="password"
                  id="password"
                  className={" mt-3 w-100 " + reg.formControlUser}
                  placeholder="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-danger p-0 text-center">
                    {formik.errors.password}
                  </div>
                ) : (
                  ""
                )}

                <input
                  type="password"
                  id="rePassword"
                  className={" mt-3 w-100 " + reg.formControlUser}
                  placeholder="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <div className="alert alert-danger text-center">
                    {formik.errors.rePassword}
                  </div>
                ) : (
                  ""
                )}
                <button
                  className="btn btn-dark w-100 text-light mt-3"
                  type="submit"
                >
                  {" "}
                  Register
                </button>
              </form>

              <div className=" mt-3 border-white opacity-25 border-top  "></div>
              <div className=" my-3 ">
                <span className="text-white-50">Already a member </span>{" "}
                <Link
                  className="text-capitalize text-decoration-none"
                  to={"/login"}
                >
                  {" "}
                  Log in{">"}{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
