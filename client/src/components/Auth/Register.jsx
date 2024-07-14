import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { registerSchema } from "../../Schemas";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import Button from "../utils/Button";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log(values);
        register(values);
        action.resetForm();
      },
    });

  const register = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/v1/auth/register", values);
      console.log(data);

      toast.success(data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
    setLoading(false);
  };

  return (
    <form className="px-3" onSubmit={handleSubmit}>
      <h3 className="my-3 text-center text-capitalize">
        Register to{" "}
        <Link
          to="/"
          className="text-dark link-underline link-underline-opacity-0"
        >
          magic notes
        </Link>
      </h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          <FaUserAlt className="mx-1 fs-6" /> Name
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className="form-control"
        />
        {errors.name && touched.name ? (
          <p className="text-danger">{errors.name}</p>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          <MdEmail className="mx-1 fs-5" /> Email Address{" "}
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="name@example.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
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
          autoComplete="off"
          placeholder="*****"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="form-control"
        />
        {errors.password && touched.password ? (
          <p className="text-danger">{errors.password}</p>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          <MdLock className="mx-1 fs-5" /> Confirm Password{" "}
          <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="password"
          name="confirm_password"
          autoComplete="off"
          placeholder="*****"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirm_password}
          className="form-control"
        />
        {errors.confirm_password && touched.confirm_password ? (
          <p className="text-danger">{errors.confirm_password}</p>
        ) : null}
      </div>

      <Button
        text="Register"
        className="my-2 mx-auto d-block btn-danger"
        loading={loading}
      />

      <div className="mt-3 text-center">
        <p className="text-uppercase fs-6">or</p>
        <button className="btn btn-outline-dark fs-6">
          <FcGoogle className="mx-1 fs-5" /> Register With Google
        </button>
      </div>
    </form>
  );
};

export default Register;
