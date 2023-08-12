import React,{useRef} from 'react'

const RefTut = () => {

  const inputREf = useRef(null);

  const ondbclick=()=>{
    inputREf.current.value = "";
  }

  return (
    <div>
        <h1>Albert</h1>
        <input type="text" 
        placeholder='ex....'
        ref={inputREf}/>

        <button onClick={ondbclick}>Change name</button>
    </div>
  )
}

export default RefTut