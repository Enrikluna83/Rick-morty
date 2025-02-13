import { useEffect, useState } from 'react'
import useFetchApi from './hooks/useFetchApi'
import LocationCard from './components/LocationCard'
import ResidentsList from './components/ResidentsList'
import SearchForm from './components/SearchForm'
import { randomId } from './utils'

const baseUrl = 'https://rickandmortyapi.com/api'

function App () {
  const { data, request, pending, error } = useFetchApi()
  const [search, setSearch] = useState(randomId(126))

  useEffect(() => {
    request(`${baseUrl}/location/${search}`)
  }, [search])

  console.log(data)
  return (
    <div>
      <div className='hero'>
        <h1>Rick and Morty</h1>
        <p>Encuentra información sobre los lugares de la serie</p>
      </div>
      <SearchForm setSearch={setSearch} />
      {pending ? <p>Cargnado...</p> : (
        data && <LocationCard location={data} />
      )}
      <ResidentsList residents={data?.residents} />
    </div>
  )
}
export default App
