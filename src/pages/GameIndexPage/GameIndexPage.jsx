import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameTab from '../../components/GameTab/GameTab';
import GameDetailPage from '../GameDetailPage/GameDetailPage';

export default function GameIndexPage() {
    let [gameIndex, setGameIndex] = useState([]);

    useEffect(function () {
        async function getList() {
            const lists = await fetch("https://mmo-games.p.rapidapi.com/games", {
                "method": "GET",
                "headers": {
                    
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    let games = data;
                    console.log(games);
                    setGameIndex(games);
                })
                .catch(err => {
                    console.error(err);
                });
        }
        getList()
    }, [])




    return (
        <>
            {gameIndex.map((game, idx) => {
                return (
                <div>
                    <Link to={`/index/${game.title}`}>
                    <GameTab game={game} key={idx} />
                    </Link>
                </div>
                )
                })
            }   
        </>
    )
}
