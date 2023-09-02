import React, { useState } from 'react'

export const DogImage = ({ url }) => {
  return (
    <div>
      <img className="img" src={url} alt="犬の画像"></img>
    </div>
  )
}

export default DogImage
