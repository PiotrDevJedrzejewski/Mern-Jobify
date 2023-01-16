import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link, Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const Landing = () => {
  const { user } = useAppContext()

  return (
    <>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              Job <span>tracking</span> app
            </h1>
            <p>
              I'm baby truffaut master cleanse keffiyeh chia. Scenester
              letterpress cornhole knausgaard tousled paleo air plant palo santo
              pok pok seitan gastropub cray af dreamcatcher kitsch. Portland
              gochujang farm-to-table, kinfolk raclette shoreditch vaporware
              locavore 8-bit roof party venmo pabst air plant
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </>
  )
}

export default Landing
