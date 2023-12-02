import { useState } from "react";
import { Link } from "react-router-dom";
import  Card  from "../Componentes/Card";
import  Letra  from "../Componentes/Letra";

export default function Home() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("lista")) || [];
    const listaLocalStorageL = JSON.parse(localStorage.getItem("listaLetra")) || [];

    return (
        <div>
            <div class="navbar">
                <p><a href="/todo">CADASTRE AQUI</a></p>
            </div>

            <h2>EXPOSIÇÃO DE VIDEOS</h2>
    
            {listaLocalStorage.map((exposicao)=> <div> <Card arte={exposicao}/></div>)}{/* renderização do nome */}
            {listaLocalStorageL.map((letraMusica)=> <div> <Letra descricao={letraMusica}/></div>)} {/* renderização da letra */}

            {/* renderização do vídeo na tela do usuário */}
            {/* <iframe
  width="853"
  height="480"
  src={`https://www.youtube.com/embed/${video.url.slice(17)}`}
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
></iframe> */}

        </div>
    );
}
