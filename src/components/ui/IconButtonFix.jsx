import React from 'react'

const IconButton = ({textColor,icon,click}) => {

  return (
    <button className={`w-8 text-xl font-semibold cursor-pointer ${textColor}` } onClick={click}>
        {icon}
    </button>
    )
}

export default IconButton