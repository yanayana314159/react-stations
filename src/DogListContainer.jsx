import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect.jsx'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(['dog'])
  const [selectedBreed, setselectedBreed] = useState('affenpinscher')
  const [SearchDogUrl, setSearchDogUrl] = useState([
    'https://images.dog.ceo/breeds/boxer/28082007167-min.jpg',
    'https://images.dog.ceo/breeds/boxer/28082007167-min.jpg',
  ])

  const Optchange = event => {
    event.preventDefault
    setselectedBreed(event.target.value)
    //console.log(selectedBreed) 一つ前のselectedbreedが出てくる
    console.log(event.target.value)
    //更新しようと思っている値
  }
  const searchDog = selectedBreed => {
    const DogSearchUrl =
      'https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12'

    fetch(DogSearchUrl)
      .then(response => response.json())
      .then(data => data.message)
      .then(imageurl => {
        //imageurl.map(pics => console.log(pics))
        setSearchDogUrl(imageurl)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
  const DogImgFunc = SearchDogUrl => {
    SearchDogUrl.map(pic => <img url={pic} />)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => data.message)
      .then(x => {
        setBreeds(Object.keys(x))
      })
  }, [])
  return (
    <>
      <div>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          event={Optchange}
        />
        <button onClick={() => searchDog(selectedBreed)}>表示</button>
      </div>
      <div className="Dogimgs">
        {SearchDogUrl.map((pic, index) => (
          <img className="img" src={pic} alt="犬の画像" key={index}></img>
        ))}
      </div>
    </>
  )
}

export default DogListContainer
/*

*/
