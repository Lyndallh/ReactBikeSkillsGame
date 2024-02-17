// InputForm.js
import React, { useState } from 'react';

function PracticeInputForm(props) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // we want to stop html and JS default behaviour
    if (!inputValue) return; // if there is not value, early return so that blank values don't go into the database
    props.addPractice (props.index, inputValue);
    setInputValue('');
  };

  return (
    <form>
      <p>Want to practice some more? </p>
      <p>How many more times?</p>
      <input  
        type="number" 
        value={inputValue} 
        onChange={(event) => setInputValue(Number(event.target.value) )}
      />
      <button onClick={handleSubmit}>Submit Practices</button>
    </form>
  );
};

export default PracticeInputForm;
