
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const Home = () => {
    const navigate = useNavigate();
  return (
    <section className="home_section text-white">
      <header className="d-flex justify-content-between px-5 py-3">
      <Link className="navbar-brand text-uppercase d-flex align-items-center " to="/">
        <GiNotebook className="fs-2 text-warning me-1 " />
        My Dairy
      </Link>
      <Link className="= text-capitalize  text-decoration-none btn btn-outline-light btn-sm" to="/dashboard">
       
        Go to Dashboard
      </Link>

      </header>
      <div className="d-flex align-item-center justify-content-center flex-column ">
        <h1 className="home_title text-center">
        Unlock the Power of Your Diary
          <br />
          <span>Create, Edit, and Access Your Ideas Securely!</span>
        </h1>
        <button className="btn btn-light fs-4 mx-auto d-block my-4 btn-lg text-capitalize" style={{fontWeight: "600"}} onClick={()=> navigate("/auth/") }>Get Started for free <FaArrowRight className="mx-1 "/></button>
      </div>
    </section>
  );
};

export default Home;
