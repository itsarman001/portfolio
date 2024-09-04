import React from 'react'

function TechStack({label, icon, key}) {
  return (
    <div className='flex items-center gap-2' key={key}>
        <span>{icon}</span>
        <span>{label}</span>
    </div>
  )
}

export default TechStack