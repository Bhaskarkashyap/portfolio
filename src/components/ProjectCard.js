import React from 'react'

const ProjectCard = ({id , imgURL, Title, Description, Tech, link}) => {
  return (
    <div className='text-center w-96 h-auto border shadow-lg' key={id}>
    <a href={link} target='_blank' rel="noreferrer"><img src={imgURL} className='w-full h-80 object-cover object-center' alt='' /></a>
    <div className='z-20 w-full'>
        <div className='font-bold text tracking-wide py-3 text-xl'>{Title}</div>
    </div>

    <p className='text-justify py-4 text-gray-500 p-4 leading-relaxed text-sm'>
    {Description}
    </p>
    <h2 className='text-xl font-bold mb-4'> Stack</h2>
    <ul className='flex justify-between text-gray-400 text-sm px-4 py-1 pb-5 font-semibold'>
      
 <li>{Tech[0]}</li>
 <li>{Tech[1]}</li>
 <li>{Tech[2]}</li>
    </ul>
    </div>
  )
}

export default ProjectCard