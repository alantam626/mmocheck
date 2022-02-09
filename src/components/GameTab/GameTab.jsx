import { Link } from "react-router-dom";

export default function GameTab({game, key})  {
    return <div className="card" key = {key}>
        {game.title}
        {game.short_description}
    </div>
}