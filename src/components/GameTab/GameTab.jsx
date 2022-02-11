import { Link } from "react-router-dom";

export default function GameTab({game, key})  {
    let pic = game.thumbnail

    return <div className="card" key = {key}>
        <h3>{game.title}</h3>
        {game.short_description} <br></br>
        <img src={pic} />
    </div>
}