import { useFormik } from 'formik'

import { MdLock } from 'react-icons/md'
import { resetSchema } from '../../Schemas'
import { useState } from 'react'
import Button from '../utils/Button'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const initialValues = {
  password : "" ,
  confirm_password : ""
}


const Reset = () => {
  const [queryParameters] = useSearchParams()
  const email = queryParameters.get("email")
  const token = queryParameters.get("token")

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const {handleChange, values, errors, touched, handleBlur  , handleSubmit } = useFormik ({
    initialValues : initialValues ,
    validationSchema : resetSchema,
    onSubmit : (values, action)=>{
      console.log(values)
      reset(values);
      action.resetForm();

    } 

  })


  const reset = async (values) =>{
    setLoading(true);
    try {
      let {password} = values;
    const {data} = await axios.post("/api/v1/auth/forgot-password", {password, email, token});
    toast.success(data.msg);
    navigate("/auth");
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
      
    }
    setLoading(false);
  }



  return (
    <section className="auth_section">
    <form onSubmit={handleSubmit} className="bg-white p-4 px-5 rounded inner_auth_div">
      <h3 className="my-3 text-center text-primary">Reset Password</h3>
      <div className="mb-3">
      <label htmlFor="password" className="form-label">
        <MdLock className="mx-1 fs-5"/> Password  <span className="text-danger mx-1">*</span>
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
        {
          errors.password && touched.password ? 
          <p className="text-danger">
            {errors.password}
          </p>
          : null
        }
      </div>
      <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">
        <MdLock className="mx-1 fs-5"/>Confirm Password  <span className="text-danger mx-1">*</span>
        </label>
        <input
          type="password"
          name="confirm_password"
          placeholder="*****"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirm_password}
          className="form-control"
        />
         {
          errors.confirm_password && touched.confirm_password ? 
          <p className="text-danger">
            {errors.confirm_password}
          </p>
          : null
        }
      </div>
          <Button 
            className="btn-primary mx-auto my-2 d-block"
            text="Reset Password"
            loading={loading}
          />

      </form>
    </section>
  )
}

export default Reset
