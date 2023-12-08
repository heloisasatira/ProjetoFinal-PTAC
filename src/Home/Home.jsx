import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  Card  from "../Componentes/Card";
import  Letra  from "../Componentes/Letra";
import  Autor  from "../Componentes/Autor";

export default function Home({ video }) {

    const salvar = JSON.parse(localStorage.getItem("videos")) || [];

/*     useEffect()  => {
      const 
} */

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

<iframe
    width="853"
    height="480"
    src={"https://www.youtube.com/embed/" + salvar.url.slice(17)}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; piccture-in-picture"
    allowFullScreen
>
</iframe>
        </div>
    );
}
