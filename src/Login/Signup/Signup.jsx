import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(8, "Must be 8 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div
      style={{
        backgroundImage: `url(Assets/Background.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="justify-center items-center flex"
    >
      <div className="signup " style={{ marginLeft: "-500px" }}>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-center text-5xl text-slate-50 mx-12 mt-4">
            Get Started
          </div>
          <div className="flex items-center justify-center text-gray-200">
            Already have an Account ?{" "}
            <NavLink to="/signin" className="text-green-600">
              Log in
            </NavLink>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className=" flex flex-col gap-y-10 relative mr-11 ml-11">
            <div className="flex  flex-col  ">
              <label className="text-slate-50 justify-self-start ">Name</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              ></input>
            </div>
            <div className="flex  flex-col  ">
              <label className="text-slate-50 justify-self-start ">Email</label>
              <input
                className="input"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              ></input>
            </div>
            <div className="flex  flex-col  ">
              <label className="text-slate-50 justify-self-start ">
                Password
              </label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              ></input>
            </div>
            <div className="flex items-center justify-center ">
              <button className="border-solid border-2 border-green-600  h-9 hover:bg-green-600 hover:text-slate-50 rounded-md w-44">
                Submit
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-2">
              <div className="divide-solid border-2 border-x-neutral-50 w-32"></div>
              <div className="text-neutral-50">Or Sign Up with </div>
              <div className="divide-solid border-x-neutral-50 border-2 w-32"></div>{" "}
            </div>
            <div className="flex flex-row  items-center justify-center">
              <div>
                <img src="Assets/Applelogo.png" alt="" srcset="" />
              </div>
              <div>
                <img src="Assets/Googlelogo.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </form>
        <div className="absolute s-img ">
          <img src="Assets/Yarpaq.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
