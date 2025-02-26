import React from 'react'
import './Tool.css'

interface ToolProps  {
    icon: string,
    text: string
}

const Tool: React.FC<ToolProps> = ({icon,text})=> {
  return (
    <div className="tool">
        <i className={icon}></i><p>{text}</p>
    </div>
  )
}

export default Tool