import { Link, useNavigate } from "react-router-dom";
// import { AppState } from "../../utils/Context";
import Underline from "../utils/Underline";
import { toast } from "react-toastify";
// import image from './images/user_profile_image.png'

const SettingPage = () => {
    const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("userToken");
    toast.success("Successfully Logout.")
    navigate("/");

  }

  return (
    <section className="main_content container-md my-3">
      <h3 className="mx-1">Account Setting</h3>
      <Underline type="start" />

      <div className="bg-warning-subtle mt-3">
        <p className="p-3">
          You Cannot delete your account until you have{" "}
          <Link
            to="#!"
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            login
          </Link>
          , only then you are allowed to delete your account.
        </p>
      </div>

      <div className="text-center shadow shadow-md py-3">
        <img
          src="../images/user_profile_image.png"
          alt="profile"
          className="img-thumbnail rounded-circle "
          style={{ width: "150px" }}
        />

        {/* user info */}
        <div className=" d-flex justify-content-center gap-3 fs-5 ms-5 align-items-center">
          <div className=" d-flex flex-column">
            <span className="">Name:</span>
            <span>Email :</span>
          </div>
          <div className=" d-flex flex-column justify-content-start">
            <span className="text-start ">test user 1</span>
            <span>testuser1@gmail.com</span>
          </div>
        </div>

        {/* button container */}
        <button className="btn btn-dark d-block mx-auto my-3" onClick={handleLogout} >Logout</button>
        {/* <div className="text-center">
          <button className="btn btn-dark mx-2">Update Account Info</button>
          <button className="btn btn-dark mx-2">Chnage Password</button>
        </div> */}
      </div>
    </section>
  );
};

export default SettingPage;
