import React, { useState } from 'react'
import { ProjectData } from '../constant/ProjectData';
import ContainerWidth from '../Layout/ContainerWidth'
import ProjectCard from './ProjectCard';

const ProjectContent = () => {
    const [content ] = useState(ProjectData);

  return (
    <ContainerWidth>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-20  gap-y-8 '>
       {
         content.map(innerContent => (
           <>
               <ProjectCard {...innerContent} key={innerContent.id} />
           </>
         ))
       }
        </div>
        </ContainerWidth>
  )
}

export default ProjectContent