import {useLocation } from "react-router-dom"

export default function GameDetailPage() {

    const location = useLocation();
    const { state } = location;
    console.log(state)

    return(<>
    <img src={state.game.thumbnail}></img>
    <div className="detail">
        Title: {state.game.title} <br></br><br></br>
        Description: {state.game.short_description} <br></br><br></br>
        Developer: {state.game.developer} <br></br><br></br>
        Publisher: {state.game.publisher} <br></br><br></br>
        Release Date: {state.game.release_date} <br></br><br></br>
        Genre: {state.game.genre} <br></br><br></br>
        Website: <a href={`${state.game.game_url}`}>{state.game.game_url}</a>
    </div>
    </>
    )
}