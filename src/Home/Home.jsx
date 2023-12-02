import { useState } from "react";
import { Link } from "react-router-dom";
import  Card  from "../Componentes/Card";

export default function Home() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("lista")) || [];
    /*     const video ( id ) => {
           if ( id == id){
            return listaVideo;
            }
        } */

    return (
        <div>
            <div class="navbar">
                <p><a href="/Cadastro"></a>CADASTRE AQUI</p>
            </div>

            <h2>EXPOSIÇÃO DE ARTES</h2>

   {listaLocalStorage.map((exposicao)=> <div> <Card arte={exposicao}/></div>)}{/* renderização do nome */}
   {listaLocalStorage.map((letraMusica)=> <div> <Card music={letraMusica}/></div>)} {/* renderização da letra */}
           
            <div>
                <img class="container2" src="https://www.nucleodoconhecimento.com.br/wp-content/uploads/2019/06/arte-nouveau.jpg" />
            </div>

            <br></br>
            <br></br>

            <h3 class="home">Arte</h3>
            <figure>
                <img class="card-img-top" src="https://i.pinimg.com/564x/b0/2a/d5/b02ad52919267e6bcd3efc37666307bb.jpg" />
            </figure>

            {/* renderização do vídeo na tela do usuário */}
            {/* <iframe
  width="853"
  height="480"
  src={`https://www.youtube.com/embed/${video.url.slice(17)}`}
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
></iframe> */}

            <footer>Meu Site - Todos os direitos Reservados - 2022</footer>

        </div>
    );
}
