import React from 'react'
import "./Generate.css"
import Navbar from '../../navbar/Navbar'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Generate() {
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [selectedQuestionType, setSelectedQuestionType] = useState('');
  const [showTypeOfQuestion, setShowTypeOfQuestion] = useState('');
  const [optionsData, setOptionsData] = useState([]);
  const [titleQuestion, setTitleQuestion] = useState('');
  const [titleForm, setTitleForm] = useState('');
  const [FormData, setFormData] = useState([]);
  
  const handleTitleFormChange = (event) => {
    setTitleForm(event.target.value);
  }

  const handleAddQuestionClick = () => {
    setShowQuestionForm(true);
    const handleSaveFormClick = () => {
      setShowQuestionForm(false); 
    };
    setOptionsData([]);
  };

  const cancelAddQuestionClick = () => {
    setShowQuestionForm(false);
    const handleSaveFormClick = () => {
      setShowQuestionForm(true); 
    };
  };

  const handleTitleChange = (event) => {
    setTitleQuestion(event.target.value);
  }

  const handleQuestionTypeChange = (event) => {
    setSelectedQuestionType(event.target.value);
    setShowTypeOfQuestion(event.target.value);
  };

  const handleOptionsChange = (event) => {
    const newOptions = event.target.value.split('\n').filter(option => option.trim() !== '');
    setOptionsData(newOptions);
  };

  const saveQuestionClick = () => {
    const newQuestion = {
      title: titleQuestion,
      type: selectedQuestionType,
      options: optionsData,
    };
    setFormData(prevFormData => [...prevFormData, newQuestion]);
    
    cancelAddQuestionClick();
  };

  const saveFormClick = () => {

    console.log(FormData);
  }

  const renderQuestions = () => {
    return FormData.map((question, index) => (
      <div key={index} className="question-container">
        <h3>{question.title}</h3>
        {question.type === "text" && (
          <div>
            Options:
              {question.options.map((option, optionIndex) => (
                <input key={optionIndex}>{option}</input>
              ))}
          </div>
        )}
      </div>
    ));
  };
  
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="InputContainer">
          <input placeholder="Form title" id="input" className="input" name="text" type="text" onChange={handleTitleFormChange}/>
        </div>

        {showQuestionForm && (
          <div className="form-questions">
            <label>
              Enter your question :
              <input className='new-question-input' type="text" placeholder='Enter your question' onChange={handleTitleChange}/>
            </label>

            <label>
              Select the type of response:
              <select className='select-question-type' onChange={handleQuestionTypeChange} value={selectedQuestionType}>
                <option value="text">Text</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio</option>
              </select>
            </label>
            {showTypeOfQuestion && (
              <div className='type-question'>
                  {showTypeOfQuestion !== "text" && (
                    <>
                      Enter Options (line seperated):
                      <textarea
                        className="options-input"
                        cols="60"
                        rows="4"
                        placeholder="Enter your options here"
                        onChange={handleOptionsChange}
                      />
                    </>
                  )}
              </div>
            )}
            <div className='btn-container'>
              <button className='btn'>
                <span className="text" onClick={saveQuestionClick} >Save</span>
              </button>
              <button className='btn'>
                <span className="text" onClick={cancelAddQuestionClick}>Cancel</span>
              </button>
            </div>
          </div>
        )}
        {
          FormData.length > 0 && (
            <div className='form-body'>
              {renderQuestions()}
            </div>
          )
        }
        <div className="form-footer">
          <button className="add-question-btn button" onClick={handleAddQuestionClick}>
            <span className="text">Add Question</span>
          </button>
          <button className="save-form-btn button" onClick={saveFormClick} >
            <span className="text"><Link to="/">Save</Link></span>
          </button>
        </div>
      </div>
    </div>
  );
}