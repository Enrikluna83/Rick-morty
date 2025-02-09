import { useEffect, useState } from 'react'
import useFetchApi from './hooks/useFetchApi'
import LocationCard from './Components/LocationCard'
import ResidentsList from './Components/ResidentsList'
import SearchForms from './Components/SearchForm'
import { randomId } from './utils'

const baseUrl = 'https://rickandmortyapi.com/api'

function App () {
  const {data, request, pending, error } = useFetchApi()
  const [search, setSearch] = useState(randomId(126))

useEffect(() => {
  request(`${baseUrl}/location/${search}`)
}, [search])

return (
  <div>
    <h2>Rick and Morty</h2>
    <SearchForm setSearch={setSearch} />
    {pending ? <p>Loading...</p> : (
      data && <LocationCard  location={data}/>
    )}
    <ResidentsList residents={data?.residents} />
  </div>
  )
}

export default App
