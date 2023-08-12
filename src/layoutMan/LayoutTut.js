import React, {useEffect, useLayoutEffect, useRef} from 'react'


const LayoutTut = () => {
    const inputRef = useRef(null)

    useEffect(() => {
      console.log(inputRef.current.value)
    },[])
    useLayoutEffect(() => {
      inputRef.current.value = 'Albert2'
    },[])

  return (
    <div>
        <input type="text" ref={inputRef} placeholder="name" value='pyscho' style={{width: 300, height:250}} />
    </div>
  )
}

export default LayoutTut