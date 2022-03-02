import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import PersonalDetail from './PersonalDetail';

const  Info = () => {
  return (
    <div className='flex-1 max-w-2xl pr-2 pl-2'>
    <p className='sm:mt-10 text-xl mt-20 text-center sm:text-left sm:text-5xl font-semibold leading-tight tracking-wide mb-2.5 text-white'>BHASKAR</p>
    <p className='text-white mb-10 text-base leading-normal text-center sm:text-left'>Frontend Developer</p>
    {/* <p className='text-white mb-10 text-lg leading-normal'>
I Develop user interface of websites and web applications, currently I am using React Frontend Technology for Development and also conversion of PSD into HTML and way to become MERN stack Developer .</p> */}
<div className='text-white mb-5'>
 <PersonalDetail title='Age' detail='22' />
 <PersonalDetail title='Phone' detail='+91 9639249173'  />
 <PersonalDetail title='Email' detail='bhaskarkashyap02@gmail.com'  />
 <PersonalDetail title='Address' detail='Roorkee, Uttarakhand'  />
</div>

<div className='flex mb-5'>
<a href='https://www.linkedin.com/in/bhaskar-502a42203/'  target='_blank' rel="noreferrer" className='pr-3'>
<BsLinkedin className='text-xl text-white' />
</a>
<a href='https://github.com/Bhaskarkashyap' target={'_blank'} rel="noreferrer">
<BsGithub className='text-xl text-white' />
</a>
</div>
</div>
  )
}

export default Info