import React from 'react';

const HobbieItem = (props) => {
  const hob = props.hobbie;
  function getIcon(){
    if (hob === 'Cooking') {
      return <i style={{ fontSize:'4rem'}} className="ion-ios-nutrition-outline"></i>;
    } else if (hob === 'Basketball') {
      return <i style={{ fontSize:'4rem'}} className="ion-ios-basketball-outline"></i>;
    } else if (hob === 'RaspberryPi') {
      return <i style={{ fontSize:'4rem'}} className="ion-ios-flask-outline"></i>;
    } else {
      return <i style={{ fontSize:'4rem'}} className="ion-ios-gear-outline"></i>;
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
