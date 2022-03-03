import React, { useState } from 'react'
import { ProjectData } from '../constant/ProjectData';
import ContainerWidth from '../Layout/ContainerWidth'
import ProjectCard from './ProjectCard';

const ProjectContent = () => {
    const [content ] = useState(ProjectData);

  return (
    <ContainerWidth>
          <div className='grid 2xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-20  gap-y-8 place-items-center pb-10'>
       {
         content.map(innerContent => (
           <>
               <ProjectCard {...innerContent} id={innerContent.id} />
           </>
         ))
       }
        </div>
        </ContainerWidth>
  )
}

export default ProjectContent