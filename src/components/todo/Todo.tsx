import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/Slice'

export const Todo = () => {
    const data = useSelector((state:RootState) => state.counter.task)
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
        {
data.length > 0 && data.map((each) => (<div key={each} style={{display:'flex',gap:'20px',alignItems:"center"}}>
    <div>taskName</div>
    <button style={{background:'green',padding:'10px'}}>add</button>
    <button style={{background:'red',padding:'10px'}}>remove</button>
    <button style={{background:'yellow',padding:'10px'}}>update</button>
</div>))
        }
        
    </div>
  )
}
