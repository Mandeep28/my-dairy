import React from 'react'
import NoteForm from '../utils/NoteForm'

const EditNote = () => {
  return (
    <div className="container">
    <h3 className="my-3 text-capitalize">Edit Diary</h3>
    {/* 
    props form NoteForm component
    Values , handleChange, handleBlur , handleSubmit , errors
    */}

 <NoteForm />
  </div>
  )
}

export default EditNote
