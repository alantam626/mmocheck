import { useNavigate } from 'react-router-dom'

export default function Search({ searchQuery, setSearchQuery }) {
    const navigate = useNavigate();
    const onSubmit = e => {
        navigate(`?s=${searchQuery}`)
        e.preventDefault()
    } 
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
        <button type="submit">Search</button>
    </form>
    );
}