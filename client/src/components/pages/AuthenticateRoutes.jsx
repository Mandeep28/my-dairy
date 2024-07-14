import { Route, Routes } from "react-router-dom"
import Auth from "../Auth/Auth"
import Forgot from "../Auth/Forgot"
import Reset from "../Auth/Reset"
import VerifyMail from "../Auth/VerifyMail"


const Authenticate = () => {
  return (
    <>
    <Routes>
        <Route path="/" exact element= {<Auth/>} />
        <Route path="/forgot" exact element= {<Forgot/>} />
        <Route path="/reset" exact element= {<Reset/>} />
        <Route path="/verify" exact element= {<VerifyMail/>} />
    </Routes>
      
    </>
  )
}

export default Authenticate
