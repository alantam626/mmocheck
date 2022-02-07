import {useState, useEffect} from 'react';
import GameList from '../../components/GameList';

export default function GameIndexPage() {
    const [gameList, useGameList] = useState([]);
    return(
        <GameList gameList={gameList} />
    )

}