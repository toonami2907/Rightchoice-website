import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const page = () => {
  return (
    <TypeAnimation
      sequence={[
        "Welocme to our Youtube channel", 1000,
        "this is to show what we are doing", 1000,
    ]}
    />
  )
}

export default page