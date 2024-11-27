import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoteContainer from "../utils/NoteContainer";
import { useEffect } from "react";
import { AppState } from "../../utils/Context";
import data from "../../utils/data";

const Dashboard = () => {
  const {  setAllNotes , allNotes} = AppState();
  useEffect(() => {

  setTimeout(() => {
    
    setAllNotes(data);
  }, 2000);

     
  }
  ,[]);

  return (
    <>
      <NoteContainer title="All Notes" data={allNotes} type='allnotes' />
      {/* plus buttom (sticky) */}
      <div className=" text-bg-dark d-inline-block p-3 rounded-circle circle-plus">
        <Link to="/dashboard/addnote">
          <FaPlus size={29} className="text-light" />
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
