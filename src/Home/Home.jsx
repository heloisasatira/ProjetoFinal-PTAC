import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  Card  from "../Componentes/Card";
import  Letra  from "../Componentes/Letra";
import  Autor  from "../Componentes/Autor";

export default function Home() {

    useEffect(() => {
        const sVideos = JSON.parse(localStorage.getItem('videos')) || [];
        setVideos(sVideos);
      }, []);

    const listaLocalStorage = JSON.parse(localStorage.getItem("lista")) || [];
    const listaLocalStorageL = JSON.parse(localStorage.getItem("listaLetra")) || [];
    const listaLocalStorageA = JSON.parse(localStorage.getItem("listaAutor")) || [];

    return (
        <div>
            <div class="navbar">
                <p><a href="/todo">CADASTRE AQUI</a></p>
            </div>

            <h2>EXPOSIÇÃO DE VIDEOS</h2>
           
            {listaLocalStorage.map((exposicao)=> <div> <Card arte={exposicao}/></div>)}{/* renderização do nome do vídeo */}
            {listaLocalStorageL.map((letraMusica)=> <div> <Letra descricao={letraMusica}/></div>)} {/* renderização da letra */}
            {listaLocalStorageA.map((autorProprietario)=> <div> <Autor proprietario={autorProprietario}/></div>)} {/* renderização do nome do autor */}
            
            {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={index} className="video">
              <h3>{video.nome}</h3>

          <iframe
                width="100%"
                height="200"
                src={"https://www.youtube.com/embed/" + video.url.slice(17)}
                title={video.nome}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h5>{video.url}</h5>
            </div>
          ))
        ) : (

        )}
</div>

    );
}
