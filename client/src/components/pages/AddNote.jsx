import React from "react";
import NoteForm from "../utils/NoteForm";

const AddNote = () => {
  return (
    <div className="container">
      <h3 className="my-3 text-capitalize">Make a new Diary</h3>
      {/* 
      props form NoteForm component
      Values , handleChange, handleBlur , handleSubmit , errors
      */}

   <NoteForm />
    </div>
  );
};

export default AddNote;
