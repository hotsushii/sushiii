import React from 'react';
import HobbieItem from './HobbieItem';
import SkillItem from './SkillItem';

const DetailBody = (props) => {
  const info = props.jinfo;
  const employ = props.jinfo.employer.split('|');
  const sushi = 'https://www.hotsushii.com';
  return(
    <div className="col-lg-8">
      <div className="card bg-dark text-white">
        <img className="card-img" src={info.imgUrl} alt="jonathan ortiz" />
        <div className="card-img-overlay">
          <h3 className="card-title"><i className="ion-person"></i></h3>
          <p className="card-text">Title: {info.title}</p>
          <p className="card-text">Locale: {info.location}</p>
          <p className="card-text">Current employer: {employ[0]}</p>
          <p className="card-text">Experience: {info.yearsExp} yrs.</p>
          <a href={sushi} target="_blank" className="btn btn-sm btn-outline-info">hotsushi</a>
        </div>
      </div>
    </div>
  );
};

const ArticleWall = (props) => {
  const bodyRow = {
    padding: '2.5rem'
  };
  if (props.hobbies !== undefined || props.skills !== undefined) {
    return(
      <div>

        <div className="row justify-content-center">

          <div className="col-lg-10">
            <div className="row justify-content-center">
              <DetailBody jinfo={props.info}/>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" style={bodyRow}>
          <div className="col-lg-9">
            <h1 className="display-4 text-center" style={{fontSize:'2rem', padding: '1rem'}}>Skills</h1>
          </div>

          <div className="col-lg-10">
            <div className="row justify-content-center">
              {props.skills.map((skill, index) => <SkillItem key={index} skill={skill} />)}
            </div>
          </div>

        </div>
        <div className="row justify-content-center" style={bodyRow}>
          <div className="col-lg-9">
            <h1 className="display-4 text-center" style={{fontSize:'2rem', padding: '1rem'}}>Hobbies</h1>
          </div>
          <div className="col-lg-10">
            <div className="row">
              {props.hobbies.map((hobbie, index) => <HobbieItem key={index} hobbie={hobbie} />)}
            </div>
          </div>
        </div>
      </div>
    );

  } else {
    return null;
  }
};

export default ArticleWall;
