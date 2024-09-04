import React from 'react'

function Heading({label, className="", }) {
  return (
    <h1 className={`${className}`}>
    {label}
    </h1>
  )
}

export default Heading