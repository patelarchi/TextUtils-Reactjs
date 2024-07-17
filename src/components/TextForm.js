import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLwClick = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText('');
  };

  const handleReverseClick = () => {
    setText(text.split('').reverse().join(''));
  };

  const [text, setText] = useState('Enter Text Here....');

  return (
    <>
    <div className="container">
      <div className="form-floating m-5">
        <h2 className='pb-3'>{props.heading}</h2>
        <textarea className="form-control" onChange={handleOnChange} id="myBox" rows='8' value={text}></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleLwClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleReverseClick}>Convert To Reverse</button>
      </div>
    </div>
    <div className="container">
      <div className="row my-3 m-5">
        <h3>Your text Summury</h3>
        <p>{text.split(/[.!?]+/).length || 0} sentences , {text.split(' ').length} words and {text.length} characters</p>
        <p>{text.match(/[aeiouAEIOU]/g)?.length || 0} vowels and {text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0} constants</p>
        <p>{text.split(' ').length * 0.008} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
    </>
  );
}
