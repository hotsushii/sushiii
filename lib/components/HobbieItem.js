import React from 'react';

const HobbieItem = (props) => {
  const hob = props.hobbie;
  function getIcon(){
    if (hob === 'Cooking') {
      return <i style={{ fontSize:'4rem', color: '#e67e22'}} className="ion-ios-nutrition"></i>;
    } else if (hob === 'Basketball') {
      return <i style={{ fontSize:'4rem', color: '#d35400'}} className="ion-ios-basketball"></i>;
    } else if (hob === 'RaspberryPi') {
      return <i style={{ fontSize:'4rem', color: '#c0392b'}} className="ion-pizza"></i>;
    } else {
      return <i style={{ fontSize:'4rem', color: '#1abc9c'}} className="ion-code"></i>;
    }
  }

  return(
    <div className="col-6 col-md-3">
      <div className="card border-secondary" style={{ textAlign: 'center', marginTop: '.7rem'}}>
        <div className="card-body">
          <span className="badge badge-pill badge-info">{props.hobbie}</span>
          <p className="card-text">{getIcon()}</p>
        </div>
      </div>



    </div>
  );
};

export default HobbieItem;
