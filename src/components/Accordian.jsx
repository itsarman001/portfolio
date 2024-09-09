import React from 'react'

function Accordian({accordianData}) {
  return (
    <div>
      <div>
        <h3>{accordianData.title}</h3>
        <div>
          {accordianData.categories.map((item, index)=>(<span key={index}>{item}</span>))}
        </div>
        <a href={accordianData.href}>Live Preview</a>
      </div>
      <div>
        <div>
          <p>{accordianData.about}</p>
        </div>
        <div>
          {accordianData.screenshotes.map((item)=>(
            <img key={item.altText} src={item.path} alt={item.altText} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordian