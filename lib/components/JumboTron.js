import React from 'react';
import Modal from './Modal';

const JumboTron = (props) => {
  const selfie = props.info;
  const quote = props.quote.split('|');
  const auth = quote[0];
  const quo = quote[1];
  return(
    <div className="row justify-content-md-center">
      <div className="col col-lg-10">
        <div className="jumbotron" style={{ backgroundColor: '#ECF0F1', marginTop:'.3rem' }}>
          <div className="container" style={{color: '#6C7A89' }}>
            <blockquote className="blockquote text-left">
              <h1 className="mb-0">{quo}</h1>
              <footer style={{fontSize:'1.5rem'}} className="blockquote-footer">The famous <cite title="Source Title">{auth}</cite></footer>
            </blockquote>

            <hr className="my-4"/>
            <button type="button" className="btn btn-outline-info btn-lg" onClick={() => { props.onHandleQuote(); }}>Generate Quote</button>{' '}
            <button type="button" className="btn btn-outline-info btn-lg" data-toggle="modal" data-target="#exampleModalCenter">Contact</button>
            <Modal details={selfie} />

          </div>
        </div>
      </div>
    </div>
  );
};


export default JumboTron;
