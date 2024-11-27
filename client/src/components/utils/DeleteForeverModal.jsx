

const DeleteForeverModal = ({openRef, handleDelete}) => {
  return (
    <>
    {/* Button trigger modal */}
    <button
      type="button"
      className="btn btn-primary d-none"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      ref={openRef}
    >
      Launch demo modal
    </button>
    {/* Modal */}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Are you sure to delete the notebook permanently ?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
<p className="text-danger">
    As you cannot be restore the notebook in future
</p>

          </div>
          <div className="modal-footer ">
          <button type="button" className="btn btn-primary">
              Yes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default DeleteForeverModal
