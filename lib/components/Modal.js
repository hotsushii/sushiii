import React from 'react';

const Modal = (props) => {
  const detail = props.details;
  return(
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Contact info:</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div>
              <p className="lead">{detail.email}</p>
            </div>
            <div>
              <p className="lead">{detail.mobile}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
