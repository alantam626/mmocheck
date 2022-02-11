import {useState, useEffect} from 'react';

export default function GameList({gameLists}) {
    const [gameList, setGameList] = useState(gameLists)
    useEffect(function() {
        console.log('useEffect ran only on initial mounting of component')
    }, [])
    return(
        <div>
            {gameList.map((game) => <GameTab game={game}/>)}
        </div>
    )
}