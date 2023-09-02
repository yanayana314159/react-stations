import { useState } from 'react'

export const BreedsSelect = ({ breeds, selectedBreed, event }) => {
  return (
    <>
      <select
        name="DogBreedSelect_Select"
        value={selectedBreed}
        onChange={event}
      >
        {{ breeds }.breeds.map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
