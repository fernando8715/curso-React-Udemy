import { Link } from 'react-router-dom'


export const HeroeCard = ({heroe}) => {

    const heroeImageUrl = `../assets/heroes/${heroe.id}.jpg`;

    const CharactersByHeroe = ({heroe})=> {

        return (heroe.alter_ego === heroe.characters ) 
        ? (<></>)
        : (<p>{heroe.characters}</p>)
    }

  return (
    <div className='col'>
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroeImageUrl} alt={heroe.superhero} />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{heroe.superhero}</h5>
                        <p className="card-text">{heroe.alter_ego}</p>

                        <CharactersByHeroe heroe={heroe}/>

                        <p className="card-text">
                            <small className="text-muted">
                                {heroe.first_appearance}
                            </small>
                        </p>

                        <Link to={`/heroe/${heroe.id}`}>
                            Más...
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
