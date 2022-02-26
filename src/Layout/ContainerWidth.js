import React from 'react'

const ContainerWidth = ({children}) => {
  return (
    <div className=" max-w-6xl mx-auto relative  pr-4 pl-4">
    {
        children
    }
    </div>
  )
}

export default ContainerWidth