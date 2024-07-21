import React from 'react'
import "../../App.css";

const BrandName = ({label}) => {
  return (
    <div>
      <span className="text-2xl inter-tight">{label}</span>
    </div>
  );
}

export default BrandName
