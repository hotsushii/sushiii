import React from 'react';

const DetailBody = (props) => {
  const info = props.jinfo;
  const employ = props.jinfo.employer.split('|');
  const cardI = {
    marginRight: '1rem', fontSize: '1.6rem',
  };
  return(
    <div className="col-lg-8">
      <div className="card bg-dark text-white" >
        <img className="card-img" src={info.imgUrl} alt="jonathan ortiz" style={{minHeight:'400px'}} />
        <div className="card-img-overlay">
          <h4 className="card-title"><i className="ion-happy" style={{ marginRight:'1rem' }}></i>{info.firstName} {info.lastName}</h4>
          <p className="card-text"><i className="ion-hammer" style={cardI}></i>{info.title}</p>
          <p className="card-text"><i className="ion-map" style={cardI}></i>{info.location}</p>
          <p className="card-text"><i className="ion-lock-combination" style={cardI}></i>{employ[0]}</p>
          <p className="card-text"><i className="ion-ribbon-a" style={cardI}></i>{info.yearsExp} yrs. exp</p>
          <a href={info.sushi} target="_blank" className="btn btn-lg btn-outline-info">Hot Sushi</a>
        </div>
      </div>
    </div>
  );
};

export default DetailBody;
