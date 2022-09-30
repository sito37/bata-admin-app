import React from 'react'
import Header from '../Header/header'
import { NavLink } from 'react-router-dom'
import './style.css'

const Layout = ({children, sidebar}) => {
  return (
    <>
    <Header />
    {
      sidebar ? 
      <>
        <div className="sidebar bg-slate-200 pt-[3.5rem]  -z-10 shadow-inner  fixed top-0 left-0 bottom-0 w-1/5">
          <ul >
            <li ><NavLink to='/' style={{}}>Home</NavLink></li>
            <li ><NavLink to='/categories'>Categories</NavLink></li>
            <li ><NavLink to='/products'>Products</NavLink></li>
            <li ><NavLink to='/orders'>Orders</NavLink></li>
          </ul>
        </div>
        <div className='w-4/5 fixed right-0'>
          {children}
        </div>
      </>
      : children
    }
    
    </>
  )
}

export default Layout