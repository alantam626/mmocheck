

export default function Search({searchQuery, setSearchQuery}) {
    const filterGames = (gameIndex, searchQuery) => {
    if (!searchQuery) {
        return gameIndex;
    }

    return gameIndex.filter((game) => {
        const gameName = game.genre.toLowerCase();
        return gameName.includes(searchQuery);
    });
};
    
    return (<form action="/" method="GET">
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