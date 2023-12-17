import React from 'react'
import "./Generate.css"
import Navbar from '../../navbar/Navbar'

export default function Generate() {
  return (
    <div>
      <Navbar />
      
      <div className="form-container">
        <div  className="InputContainer">
          <input placeholder="Form title" id="input" class="input" name="text" type="text"/>
      </div>
      
      <div className="form-footer">
        <button className="add-question-btn button" >
          <span className="text">Add Question</span>
        </button>
        <button className="save-form-btn button" >
          <span className="text">Save</span>
        </button>
      </div>
    </div>
  </div>
  )
}
