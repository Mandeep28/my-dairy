import { FaInstagram ,FaGithub , FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4  bg-gradient bg-light my-4 border-top">
    <div className="col-md-4 d-flex align-items-center text-dark">
      <a
        href="/"
        className="mb-3 me-2 mb-md-0 text-body-dark text-decoration-none lh-1 text-dark"
      >
        Magic Notes
       
      </a>
      <span className="mb-3 mb-md-0 text-dark">
        © 2023 Company, Inc
      </span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a className="text-body-secondary" href="#">
        <FaInstagram className="mx-1 fs-4 text-dark" />
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="#">
        <FaGithub className="mx-1 fs-4 text-dark" />
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="#">
          <FaLinkedin className="mx-1 fs-4 text-dark" />
        </a>
      </li>
    </ul>
  </footer>


  )
}

export default Footer
