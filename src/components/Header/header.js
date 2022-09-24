import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logoutUser} from "../../redux/features/users/auth.Slice"

const Header = () => {

  const {userToken} = useSelector(state => state.auth)
  const dispatch = useDispatch()


  
  

  const renderLoggedInLinks = () => {
    return (
      <span onClick={() => dispatch(logoutUser())} className="cursor-pointer">Sign out</span>
    )
  }

  const renderNonLoggedInLinks = () => {
    return (
      <div className='text-lg flex gap-3'>
            <Link to={'/signin'} >Sign in </Link>
            <Link to={'/signup'} >Sign up </Link>
      </div>
    )
  }

  return (
    <div className='flex justify-between px-5 items-center w-full text-white bg-slate-700 border-b-2 h-[3.5rem]'>
        <div className='text-3xl'><Link to={'/'} >Admin Dashboard</Link></div>
        {userToken ? renderLoggedInLinks() : renderNonLoggedInLinks()}
    </div>
  )
}

export default Header