import React from 'react'
import "./Generate.css"
import Navbar from '../../navbar/Navbar'
import {useState} from 'react';


export default function Generate() {
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const handleAddQuestionClick = () => {
    setShowQuestionForm(true);
    const handleSaveFormClick = () => {
      // Ajoutez ici la logique pour sauvegarder le formulaire
      setShowQuestionForm(false); // Vous pouvez masquer le formulaire après avoir sauvegardé
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
          <div>
            <label>
              Enter your question:
              <input type="text" />
            </label>

            <label>
              Select the type of response:
              <select>
                <option value="checkbox">Checkbox</option>
                <option value="text">Text</option>
                <option value="radio">Radio</option>
              </select>
            </label>
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