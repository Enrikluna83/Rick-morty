import ResidentCardCard from "./ResidentCard"
import './ResidentsList.scss'

function ResidentsList ({ residents }) {
  return (
      <div className='residents__container'>
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