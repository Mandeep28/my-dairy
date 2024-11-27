import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { forgotSchema } from "../../Schemas";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import axios from "axios";
import Button from "../utils/Button";


const Forgot = () => {
  const [loading, setLoading] = useState(false);

  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: forgotSchema,
      onSubmit: (values, action) => {
        console.log(values);
        forgot(values);
        action.resetForm();
      },
    });

  const forgot = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/v1/auth/reset-password", values);
      toast.success(data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
    setLoading(false);
  };

  return (
    <section className=" p-1 auth_section">
      <div className="bg-white p-4 px-5 rounded inner_auth_div">
        <h3 className="text-center my-2 text-primary">Forgot Password</h3>
        <p className="description text-center">
          A forgot password email send to your email id. (If an existing account
          found) Click on that link to forgot your password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label ms-2">
              <MdEmail className="mx-1 fs-5" /> Email Address{" "}
              <span className="text-danger mx-1">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@example.com"
              className="form-control border border-primary"
            />
            {errors.email && touched.email ? (
              <p className="text-danger fs-6">{errors.email}</p>
            ) : null}
          </div>

          <Button 
            text="Send"
            className="my-2 mx-auto d-block btn-primary"
            loading={loading}

              />
        </form>
        <p className="my-3 text-center">
          Remember Password ?{" "}
          <Link
            to="/auth/"
            className="mx-1 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Click Here to login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Forgot;
