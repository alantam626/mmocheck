import sendRequest from './gameindexservice'
const BASE_URL = '/api/gameindex'

export function getAll() {
    return sendRequest(BASE_URL)
}

// produces an array of all genres listed by the MMOAPI
// returned array will be used as the only options for search in JSX
export function reduceGameGenres(gameIndexData) {
    let genreSet = new Set()
    let gameIndexGenre = gameIndexData.map((gameGenre) => (gameGenre.genre
    ))  
    gameIndexGenre.map((element) => genreSet.add(element))
    let finalGenreList = [...genreSet]
    return finalGenreList
}

export function filterGames(gameIndex, query) {
    if (!query) {
        console.log('hit one')
        return gameIndex;
    }

    return gameIndex.filter((game) => {
        console.log('hit big')
        const gameName = game.genre.toLowerCase();
        return gameName.includes(query);
    });
};