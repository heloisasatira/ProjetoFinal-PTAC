import { Link } from "react-router-dom";
import "...styles/card/css"

function Cards({listaVideos}) {
    return listaVideos.map((video) =>
    <div className="card">
        <iframe>
            width="856"
            height="480"
        </iframe>
    </div>
    )
}