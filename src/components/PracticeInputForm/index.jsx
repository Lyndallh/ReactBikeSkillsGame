// InputForm.js
import React, { useState } from 'react';

function PracticeInputForm(props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // we want to stop html and JS default behaviour
    if (!inputValue) return; // is there is not value, early return so that blank values don't go into the database
    props.addPractice(index, inputValue);
    setInputValue('');
  };

console.log(inputValue);
  return (
    <form>
      <input  
        type="number" 
        value={inputValue} 
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleSubmit}>Practice</button>
    </form>
  );
};

export default PracticeInputForm;
