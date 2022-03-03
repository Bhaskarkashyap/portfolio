import React from 'react'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation'
import ContainerWidth from './ContainerWidth';

const Layout = ({children , height}) => {


  return (
    <header className={` bg-gradient mb-10 ${ height ? 'h-52' : 'h-auto'} `}>
       <ContainerWidth>
       <nav className='absolute top-0 left-0 right-0 text-gray-300 mt-12 pr-3.5 pl-3.5 font-medium'>  
    <ul className='flex font-medium'>
     <Navigation linkName='Home'  name='' />
   <Navigation linkName='Projects'  name='project' />
    </ul>
     </nav>
    {
        children
    }
  
       </ContainerWidth>
     {/* <Footer /> */}
    </header>
  )
}

export default Layout