import React from 'react';
import SkillItem from './SkillItem';
import DetailBody from './DetailBody';
import HobbieItem from './HobbieItem';

const ArticleWall = (props) => {
  const bodyRow = {
    padding: '2.5rem'
  };
  const bodyRow2 = {
    padding: '.8rem'
  };
  if (props.hobbies != undefined || props.skills != undefined) {
    return(
      <div style={{paddingBottom:'2rem'}}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row justify-content-center" style={bodyRow2}>
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
