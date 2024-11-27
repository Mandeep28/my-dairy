import React from 'react'

const NoteForm = () => {
  return (
    <form>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">
        Enter title here <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter title"
        className="form-control bg-secondary-subtle"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">
        Enter description here <span className="text-danger ">*</span>
      </label>
      <textarea
        name="description"
        id="description"
        placeholder="Enter description of note"
        cols="10"
        rows="6"
        className="form-control bg-secondary-subtle"
      ></textarea>
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">
        Select Color Mode <span className="text-danger ">*</span>
      </label>
      <select
        name="colormode"
        id="colormode"
        className="form-control bg-secondary-subtle cursor-pointer"
      >
        <option value="danger">Red</option>
        <option value="primary">Blue</option>
        <option value="info">Cyan</option>
        <option value="warning">Yellow</option>
        <option value="success">Green</option>
        <option value="dark">Black</option>
        <option value="light">White</option>
      </select>
    </div>
    <button className="btn btn-dark fs-5 my-2">Add New Diary</button>
  </form>
  )
}

export default NoteForm
