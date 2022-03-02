import React from 'react'

const ContainerWidth = ({children}) => {
  return (
    <div className="2xl:max-w-6xl max-w-3xl mx-auto relative  pr-4 pl-4">
    {
        children
    }
    </div>
  )
}

export default ContainerWidth