import React from 'react'

const Count = () => {
  return (
    <div>
        <div className="grid grid-flow-col gap-5 align-center justify-center mt-2 text-center auto-cols-max">

<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
  <span className="countdown font-mono text-5xl">
    <span style={{"--value":15}}></span>
  </span>
  days
</div> 
<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
  <span className="countdown font-mono text-5xl">
    <span style={{"--value":10}}></span>
  </span>
  hours
</div> 
<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
  <span className="countdown font-mono text-5xl">
    <span style={{"--value":24}}></span>
  </span>
  min
</div> 
<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
  <span className="countdown font-mono text-5xl">
    <span style={{"--value":44}}></span>
  </span>
  sec
</div>
</div>
<div  className='align-center justify-center text-center mt-3 text-3xl text-white '>
<h1>Coming soon</h1>
</div>
    </div>
  )
}

export default Count