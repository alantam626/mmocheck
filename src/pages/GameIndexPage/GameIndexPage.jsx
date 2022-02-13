import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameTab from '../../components/GameTab/GameTab';
import Search from '../../components/Search/Search';
import * as gameindexapi from '../../utilities/gameindexapi';


export default function GameIndexPage() {
    const [gameIndex, setGameIndex] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(function () {
        async function getList() {
            const lists = await fetch("https://mmo-games.p.rapidapi.com/games", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY
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
        <main>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {gameIndex.map((game, idx) => {
                return (<div>
                        <Link to={{
                            pathname: `/index/${game.title}`
                        }}
                            state={
                                { game }
                            }
                            className='list'
                        >
                            <GameTab game={game} key={idx} />
                        </Link>
                    </div>
                )
            })
            }
            <label className='loading'>Loading</label>
        </main>
    )
}
