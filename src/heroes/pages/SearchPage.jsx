import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  // console.log(location)
  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    console.log({ searchText });
    navigate(`?q=${searchText}&asc=true`);

  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder='Buscar heroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {/* 
          {
            q === ''
              ? <div className='alert alert-primary'>Buscar un heroe</div>
              : (heroes.length === 0) && <div className='alert alert-danger'>Heroe no encontrado <b>{q}</b></div>
          } */}

          <div className='alert alert-primary' style={{ display: q !== '' ? 'none' : '' }}>Buscar un heroe</div>
          <div className='alert alert-danger' style={{ display: q !== '' && heroes.length === 0 ? '' : 'none' }}>Heroe no encontrado <b>{q}</b></div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} hero={hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
