import React from 'react'
import "./Generate.css"
import Navbar from '../../navbar/Navbar'
import {useState} from 'react';


export default function Generate() {
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const handleAddQuestionClick = () => {
    setShowQuestionForm(true);
    const handleSaveFormClick = () => {
      setShowQuestionForm(false); 
    };
  
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="InputContainer">
          <input placeholder="Form title" id="input" className="input" name="text" type="text"/>
        </div>

        {showQuestionForm && (
          <div className="form-body">
            
            <label>
              Enter your question :
              <input className='new-question-input' type="text" placeholder='Enter your question' />
            </label>

            <label>
              Select the type of response:
              <select className='select-question-type'>
                <option value="checkbox">Checkbox</option>
                <option value="text">Text</option>
                <option value="radio">Radio</option>
              </select>
            </label>
            <button className='btn'>
              <span className="text">Save</span>
            </button>
            <button className='btn'>
              <span className="text">Canel</span>
            </button>
          </div>
        )}

        <div className="form-footer">
          <button className="add-question-btn button" onClick={handleAddQuestionClick}>
            <span className="text">Add Question</span>
          </button>
          <button className="save-form-btn button" >
          <span className="text">Save</span>

          </button>
        </div>
      </div>
    </div>
  );
}