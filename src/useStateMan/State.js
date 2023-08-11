import React, { useState } from 'react'

const State = () => {

  const [value,setValue] = useState('Albu')

  let onchange = (event) => {
    const changing = event.target.value
    setValue(changing)
  }

  return (
    <div>
      <input placeholder='dai'
      onChange={onchange} />
      {value}
    </div>
  )
}

export default State