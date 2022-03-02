import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({linkName, name}) => {

  const activeStyle = 'text-white underline';
  const notActiveStyle = 'text-gray-300'
  return (

    <li className={`mr-10`  }>
      <NavLink to={`/${name}`} className={({isActive}) => isActive ? activeStyle : notActiveStyle}>
   {linkName}
      </NavLink>
        </li>


  )
}

export default Navigation