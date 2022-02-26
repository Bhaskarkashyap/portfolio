import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import ContainerWidth from './ContainerWidth';

const Layout = ({children}) => {
    const [isActive, setIsActive]  = useState('Home');

  return (
    <header className=' bg-gradient mb-10'>
       <ContainerWidth>
       <nav className='absolute top-0 left-0 right-0 text-gray-300 mt-12 pr-3.5 pl-3.5 font-medium'>  
    <ul className='flex font-medium'>
     <Navigation linkName='Home' setIsActive={setIsActive} isActive={isActive} name='' />
   <Navigation linkName='Projects' setIsActive={setIsActive} isActive={isActive}  name='project' />
    </ul>
     </nav>
    {
        children
    }
  
     
       </ContainerWidth>
    </header>
  )
}

export default Layout