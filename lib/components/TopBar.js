import React from 'react';

const TopBar = (props) => {
  const navInfo = props.topInfo;
  return(

    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-info p-4">
          <h5 className="text-white h4">{navInfo.appName}</h5>
          <span className="text-muted">v0.0.1</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-info">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>



  );
};

export default TopBar;
