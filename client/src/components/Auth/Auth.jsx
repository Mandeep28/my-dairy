import { useState } from "react";
import Login from "./Login";
import Register from "./Register";


const Auth = () => {
    const [tab , setTab] = useState(1);

const updateTab = (e) =>{
    let id = e.target.dataset.id;
    setTab(parseInt(id))
    

}

  return (
    <section 
    className=" auth_section"
 
  >
  <div className="bg-white rounded inner_auth_div">
    <div className="text-center">
    <button className={`btn mx-1 btn-sm ${tab === 1? `btn-primary`: `btn-outline-primary`}`} data-id="1" onClick={updateTab}>Login</button>
    <button className={`btn mx-1 btn-sm ${tab === 2? `btn-danger`: `btn-outline-danger`}`} data-id="2" onClick={updateTab}>Register</button>
    </div>
 
    <div className={tab=== 1 ?`d-block` : "d-none"}>
   <Login/>
  </div>
    <div className={tab=== 2 ?`d-block` : "d-none"}>
   <Register/>
  </div>
  </div>

  </section>
  )
}

export default Auth
