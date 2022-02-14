import { useNavigate } from 'react-router-dom'

export default function Search({ searchQuery, setSearchQuery, finalGenreList }) {
    const navigate = useNavigate();
    const onSubmit = e => {
        navigate(`?s=${searchQuery}`)
        e.preventDefault()
    } 

    let displayList = []
    return (<form action="/" method="GET" onSubmit={onSubmit}>
        {/* <label htmlFor="header-search">
            <span className="visually-hidden">Search Game Genres</span>
        </label> */}
        <input
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search game genres"
        name="s"
        />
        <select>
            {finalGenreList.forEach((genre) => {
                return(<option value={genre}>{genre}</option>)
            }
            )} 
        </select>
        <button type="submit">Search</button>
    </form>
    );
}