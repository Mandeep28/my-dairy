

const PreviewModal = ({ data }) => {
  
  return (
    <>
      {/* Button trigger modal */}
      {/* <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#previewModal"
  >
    Launch demo modal
  </button> */}
      {/* Modal */}
      <div
        className="modal fade p-0"
        id="previewModal"
        tabIndex={-1}
        aria-labelledby="previewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen ">
          <div className={`modal-content px-3 py-2 ${data.colorMode === 'dark' ? 'text-bg-dark' : `bg-${data.colorMode}-subtle`}`}>
         
            <div className="modal-header border-0">
              <h1 className="modal-title fs-3 mx-2" id="previewModalLabel">
                {data?.title}
              </h1>
    
              {/* <button
                type="button d-none"
                className="btn-close mx-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              /> */}
            </div>

            <p className="mx-3 my-2 text-secondary"> Last Updated At 3 min ago</p>
            
            <div className="modal-body">{data?.description}</div>
            <div className="modal-footer border-0 mx-3">
                <button className={`btn btn-${data.colorMode==='dark' ? 'light' : 'dark'}`} data-bs-dismiss="modal"
                aria-label="Close">Close</button>
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewModal;
