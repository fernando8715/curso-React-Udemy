import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../helpers';

export const HeroePage = () => {

  const {id} = useParams();
  const heroe = getHeroeById(id)

  const navigate = useNavigate()

  const onNavigateBack = ()=> {
    navigate('/login') 
  }

  
  if( !heroe ) { 
    return <Navigate to="/marvel" /> 
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src= {`../assets/heroes/${heroe.id}.jpg`} 
          alt={heroe.superhero} 
          className='img-thumbnail'
        />
      </div>

      <div className="col-8">
        <h3>{ heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>alter_ego: </b>{heroe.alter_ego}</li>
          <li className="list-group-item"><b>publisher: </b>{heroe.publisher}</li>
          <li className="list-group-item"><b>first_appearance: </b>{heroe.first_appearance}</li>
        </ul>
          <h5 className="mt-5">Characters</h5>
          <p>{heroe.characters}</p>

          <button 
            className='btn btn-primary'
            onClick={onNavigateBack}
          >
              Regresar
          </button>
      </div>
    </div>
  )

}
