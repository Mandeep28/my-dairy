import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const Verify = ({status , message}) => {
    if(status === "loading") {
        return (
            <>
            <h3 className="text-center text-primary">{message}</h3>
            <div className=" mx-1 spinner-grow spinner-grow-sm text-primary" role="status"></div>
            <div className=" mx-1 spinner-grow spinner-grow-sm text-secondary" role="status"></div>
            <div className=" mx-1 spinner-grow spinner-grow-sm text-danger" role="status"></div>
            <div className=" mx-1 spinner-grow spinner-grow-sm text-success" role="status"></div>
            <div className=" mx-1 spinner-grow spinner-grow-sm text-warning" role="status"></div>
              
            </>
        )
    }
    else if(status === "error") {
        return (
            <>
            <ImCross className="text-danger fs-1 my-2" />
            <h3 className="text-center text-primary"> {message} </h3>
            <p className="text-center">
                try again later !
            </p>
              
            </>
        )
    }

    
    

  return (
    <>
    <TiTick className="text-success  my-2" style={{fontSize: "100px"}} />
    <h3 className="text-center text-primary">{message}</h3>
    <p className="text-center">
        Your email address verify successfuly. <a href="#!" className="mx-1 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Click here</a> to login.
    </p>
      
    </>
  )
}

export default Verify
