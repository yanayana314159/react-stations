import React, { useState } from 'react'
import { DogImage } from './DogImage.jsx'

export const Description = () => {
  const [dogurl, setdogurl] = useState(
    'https://images.dog.ceo/breeds/boxer/28082007167-min.jpg',
  )

  const clickdoggie = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => data.message)
      .then(imageurl => {
        setdogurl(imageurl)
      })
  }
  return (
    <div>
      <p>ボタンをクリックするとわんちゃんがランダムで表示されるよ</p>
      <DogImage url={dogurl} />
      <button className="btn" onClick={clickdoggie}>
        クリック
      </button>
    </div>
  )
}

export default Description

//  const [dogimgurl, setdogimgurl] = useState(
//'https://images.dog.ceo/breeds/boxer/28082007167-min.jpg',
// )
