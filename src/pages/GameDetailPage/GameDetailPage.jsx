import { useEffect } from "react"
import { useParams, useLocation, useLinkClickHandler } from "react-router-dom"

export default function GameDetailPage() {

    const location = useLocation();
    const { state } = location;

    return(
    <div>
        Title: {state.game.title}
        Description: {state.game.short_description}
    </div>
    )
}