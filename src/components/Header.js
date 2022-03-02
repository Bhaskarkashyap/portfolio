import React, { useState } from 'react'
import ContainerWidth from '../Layout/ContainerWidth';
import Layout from '../Layout/Layout';
import Info from './Info'

const Header = () => {


  return (
    
   <Layout>
 
          <div className='flex flex-wrap pt-24 -ml-4 -mr-4 '>
        
          <div className='flex-1 max-w-sm   pr-3.5 pl-3.5 rounded-md '>
                <img src='/images/profile1.jpg' alt='profile1' className='w-10/12 object-cover relative top-10 rounded-md mt-2.5 align-middle' />
            </div>

           <Info />
          </div>

   </Layout>
   


  )
}

export default Header