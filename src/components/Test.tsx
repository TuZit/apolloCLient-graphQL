import React from 'react'

type Props = {
    name: string
    age?:number
}

const Test = ({name}: Props) => {
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Test