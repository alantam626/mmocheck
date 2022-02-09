import { useParams } from "react-router-dom"

export default function GameDetailPage() {
    let title = useParams()
    console.log(title)
    return(
    <div>
        title
    </div>
    )
}