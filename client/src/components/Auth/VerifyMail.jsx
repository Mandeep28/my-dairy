import { useEffect, useState } from "react";
import Verify from "./Verify";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { FcCdLogo } from "react-icons/fc";

const VerifyMail = () => {
  const [queryParameters] = useSearchParams()
 const email = queryParameters.get("email")
 const token = queryParameters.get("token")




useEffect(()=>{
    verifySTatus();
},[])



  //  it can be
  //  loading (if request is pending ) ,
  //  success (if email is verify successfully) ,
  //  error ( is token is invalid or request failed with any reason)
  const [status, setStatus] = useState("loading");
  const [statusMsg, setStatusMsg] = useState("Loading...");



  const verifySTatus = async() =>{
    try {
        const {data} = await axios.post("/api/v1/auth/verify-email/", {email, token});
        console.log(data);
        setStatus("success");
        setStatusMsg(data.msg);

      
    } catch (error) {
      console.log(error);
      console.log(error.response);
      setStatus("error");
      setStatusMsg(error.response.data.msg)
   
      
    }
    // make api call

  }




  return (
    <section className="auth_section">
      <form className="bg-white p-4 px-5 rounded inner_auth_div">
        <div className="text-center">

        <Verify status={status} message={statusMsg} />
        </div>
      </form>
    </section>
  );
};

export default VerifyMail;
