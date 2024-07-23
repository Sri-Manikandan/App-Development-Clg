import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="flex justify-between items-center bg-black text-white w-full h-[75px] p-8">
            <Link to='/'><h1 className="text-xl font-semibold">Ecommerce</h1></Link>
            <div className="flex justify-center items-center text-lg gap-5">
                <Link to='/login'><a>Login</a></Link>
                <Link to='/register'><a>Register</a></Link>
            </div>
        </div>
    </div>
  )
}

export default Header