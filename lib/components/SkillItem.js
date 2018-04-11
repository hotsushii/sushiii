import React from 'react';

const SkillItem = (props) => {
  const iSize = {
    fontSize: '3rem'
  };
  const skill = props.skill;
  function getIcon(){
    if (skill === 'JavaScript') {
      return <i style={iSize} className="ion-social-nodejs"></i>;
    } else if (skill === 'AEM') {
      return <i style={iSize} className="ion-cube"></i>;
    } else if (skill === 'Python') {
      return <i style={iSize} className="ion-social-python"></i>;
    } else if (skill === 'SaaS'){
      return <i style={iSize} className="ion-android-cloud-outline"></i>;
    } else if (skill === 'Linux'){
      return <i style={iSize} className="ion-social-tux"></i>;
    } else {
      return <i style={iSize} className="ion-android-bulb"></i>;
    }
  }
  return(
    <div className="col">
      <div className="card border-secondary" style={{ textAlign: 'center', marginTop: '.7rem'}}>
        <div className="card-body">
          <h5 className="card-title">{getIcon()}</h5>
          <span className="badge badge-pill badge-info">{skill}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
