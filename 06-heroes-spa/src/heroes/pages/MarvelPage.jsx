
import React from 'react'
import { HeroeList } from '../components'

export const MarvelPage = ({publisher}) => {


  return (
    <>
      <h1>MarvelPage</h1>
      <hr />

      <HeroeList publisher='Marvel Comics'/>
      

    </>
  )
}
