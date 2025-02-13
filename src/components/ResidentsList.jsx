import ResidentCard from './ResidentCard'
import './ResidentsList.scss'

function ResidentsList ({ residents }) {
  return (
    <div className='residents container'>
      {residents?.length > 0 ? (<>
        {residents.map(resident => (
          <ResidentCard key={resident} url={resident} />
        ))}
      </>) : (
        <p>No hay residentes</p>
      )}
    </div>
  )
}
export default ResidentsList