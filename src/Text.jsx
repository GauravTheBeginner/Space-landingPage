import React, { useState ,useEffect } from 'react'

function Text() {
    const [task,setTask]=useState("");
  return (
    <>
    <input onChange={(event)=>{
        setTask(event.target.value);
    }} />
    <h1>{task}</h1>
    </>
  )
}

export default Text