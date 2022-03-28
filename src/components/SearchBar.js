import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

<<<<<<< HEAD
const SearchBar = (props) => {
    let {term, handleSearch} = useContext(SearchContext)
=======
function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')
>>>>>>> d25adecd64f1f9bc8b2cf7edaf9f5e5f9250b4bc

    return (
            <form>
                <input ref={term} type="text" placeholder="Search Here" />
                <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
    )
}

export default SearchBar
