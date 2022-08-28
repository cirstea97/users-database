import React from 'react'
import {useNavigate} from 'react-router-dom'
import { appRoutes } from '../appRoutes';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <section>
      <div className='container--error--page'>

        <h1>THIS WEB PAGE DOES NOT EXIST!</h1>
        <p className='emoji--error'>😐</p>
        <button
          className="main--container--button"
          onClick={() => {
            navigate(appRoutes.homepage);
          }}
        >
          Back to Homepage
        </button>

      </div>
    </section>
  )
}

export default ErrorPage