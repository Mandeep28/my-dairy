import axios from "axios";
import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../Schemas";
import { toast } from "react-toastify";
import Button from "../utils/Button";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        login(values);
        action.resetForm();
      },
    });

  const login = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/v1/auth/login", values);
      console.log(data);
      localStorage.setItem("userToken", data.token);
      navigate("/dashboard");
      toast.success(data.msg);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      toast.error(error.response.data.msg);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="px-3">
      <h3 className="my-3 text-center text-capitalize">
        {" "}
        Login to{" "}
        <Link
          to="/"
          className="text-dark link-underline link-underline-opacity-0"
        >
          magic notes
        </Link>
      </h3>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          <MdEmail className="mx-1 fs-5" /> Email Address{" "}
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          autoComplete="off"
          placeholder="name@example.com"
          className="form-control"
        />
        {errors.email && touched.email ? (
          <p className="text-danger">{errors.email}</p>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          <MdLock className="mx-1 fs-5" /> Password{" "}
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="*****"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="form-control"
        />
        {errors.password && touched.password ? (
          <p className="text-danger">{errors.password}</p>
        ) : null}
      </div>
      <div className="mb-3 text-end">
        <p>
          <Link
            to="/auth/forgot"
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Forgot Password?
          </Link>
        </p>
      </div>
      <Button
        text="Login"
        className="my-2 mx-auto d-block btn-primary"
        loading={loading}
      />

      <div className="mt-3 text-center">
        <p className="text-uppercase fs-6">or</p>
        <button className="btn btn-outline-dark fs-6">
          <FcGoogle className="mx-1 fs-5" /> Login With Google
        </button>
      </div>
    </form>
  );
};

export default Login;
