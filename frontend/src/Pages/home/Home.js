import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
        <p className='no-form-text'>There is no form, please create one by pressing below 'create form' button.</p>
        <div className="button-container">
                <Link to="/generate">
					              <button className="button" id="create-form-btn">
                        <span 
                            className="text">Create form
                        </span>
                    </button>
                </Link>
		</div>
    </div>
  )
}
