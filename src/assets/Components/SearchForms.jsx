import { useRef } from 'react'
import '/SearchForms.scss'

function SearchForms ({setSearch }) {
	const inputRef = useRef()
	const [error, setError] = useState(' ')	

	const handleSubmit = (e) => {
		e.preventDefault()
		setError(' ')
		const value = +inputRef.current.value.trim()
		
		if (!value) {
			setError('Please enter a location id')
			return
		}

		if (isNaN(+value) || value < 1) {
			setError('Please enter a number')
			return
		}

		if (+value > 126) {
			setError('Please enter a valid number')
			return
		}
		
		setSearch(value)
		inputRef.current.value = ''
	}

    return (
			<form className='search' onSubmit={handleSubmit}>
				<div className='container'>
					<input className='search__input' type="text" ref={inputRef} placeholder='Enter a location id'/>
					<button className='search__btn'>Search</button>
					{error && <p className='search__error'>{error}</p>}
				</div>
      </form>
    )
}

export default SearchForms