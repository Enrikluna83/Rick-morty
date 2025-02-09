import { useEffect } from 'react'
import useFetchApi from '../hooks/useFetchApi'
import './ResidentCard.scss'

function ResidentCard ({ url }) {
  const {resident, request, error, pending } = useFetchApi()

  useEffect(() => {
	  	request(url)
	}, [url])

	const status = {
		Alive: '🟢',
		Dead: '🔴',
		unknown: '🔵'
	}


	const eppisodes = resident?.episode?.length
	const countText = eppisodesCount === 1 ? ' eppisode' : ' eppisodes'

  return (
    <div className='resident'>
			{pending ? <p>Loading...</p> : (<>
				<div className='resident__header'>
					<img className='resident__img' src={resident?.image} alt={resident?.name} width={275}/>
					<span className='resident__status'>{status[resident?.status]}{resident?.status}</span>
				</div>
				<div className='resident__body'>
				<h3 className='resident__name'>{resident?.name}</h3>
					<ul className='resident__details'>
						<li className='resident__details-item'>Specie: <span>{resident?.species}</span></li>
						<li className='resident__details-item'>Origin: <span>{resident?.origin?.name}</span></li>
						<li className='resident__details-item'>Eppisodes where appear: <span className='resident__details-span'>{eppisodesCount}{countText}</span></li>
					</ul>
				</div>
				</>)}
    </div>
	)
}

export default ResidentCardCard