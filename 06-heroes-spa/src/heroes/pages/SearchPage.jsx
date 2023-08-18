import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import  queryString  from 'query-string';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { HeroeCard } from '../components/HeroeCard';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q='' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length===0);

  const {searchText, onInputChange} = useForm({
    searchText: q
  })
 
  const onSearchSubmit = (event)=> {
    event.preventDefault();
    
    const search = searchText.toLowerCase().trim();
    // if(searchText.length <3) return;
    navigate(`?q=${search}`);
  }


  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row px-5">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder='search heroe'
              className='form-control'            
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={ onInputChange }
            />
            <button className='btn btn-outline-primary mt-3'>
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div 
            className="alert alert-primary" 
            style={{display: showSearch ? '' : 'none'}}
          >
            Search Heroe
          </div>

          <div 
            className="alert alert-danger"
            style={{display: showError ? '' : 'none'}}  
          >
            No heroe with <b>{ q }</b>
          </div>

          {
            heroes.map(heroe => 
              <HeroeCard key={heroe.id} heroe={heroe} />  
            )
          }

        </div>

      </div>
    </>
  )
}
