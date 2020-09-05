import React from 'react'
import {Link} from 'react-router-dom'
import './../styles/Welcome.scss'

function Welcome() {
    return (
        <div className="Welcome">
            <img className="logo" src={require('../images/joind.png')} alt="logo"/>
            <div className="btn-cont">
               <Link to='/login'>
                   <button className="btn">Login</button>
                </Link>
                <p>OR</p>
               <Link to='/signup'>
                   <button className="btn">Signup</button>
                </Link>  
            </div>
        </div>
    )
}

export default Welcome
