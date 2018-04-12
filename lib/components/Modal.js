import React from 'react';

const Modal = (props) => {
  const detail = props.details;
  const fir = props.details.firstName;
  const las = props.details.lastName;
  const modalIcon = {
    fontSize: '4rem', textAlign: 'center'
  };
  return(
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">{fir} {las}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row align-items-center" style={{ textAlign:'center' }}>
                <div className="col-12 align-self-center">
                  <i className="ion-iphone" style={modalIcon}></i>
                </div>
                <div className="col align-self-center">
                  <p className="lead">{detail.mobile}</p>
                </div>
                <div className="col-12 align-self-center">
                  <i className="ion-ios-email-outline" style={modalIcon}></i>
                </div>
                <div className="col align-self-center">
                  <p className="lead">{detail.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-info btn-block" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
