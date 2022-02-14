import {useLocation } from "react-router-dom"
import Favorite from "../GameIndexPage/Sections/Favorite";

export default function GameDetailPage() {

    const location = useLocation();
    const { state } = location;
    console.log(state)

    return(
    <>
    <img src={state.game.thumbnail}></img>
    <div className="detail">
        Title: {state.game.title} <br></br><br></br>
        Description: {state.game.short_description} <br></br><br></br>
        Developer: {state.game.developer} <br></br>
        Publisher: {state.game.publisher} <br></br>
        Release Date: {state.game.release_date} <br></br>
        Genre: {state.game.genre} <br></br>
        Website: <a href={`${state.game.game_url}`}>{state.game.game_url}</a>
        <Favorite />
    </div>
    </>
    )
}