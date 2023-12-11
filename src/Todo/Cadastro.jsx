import { useState, useEffect } from "react";// useState permite a criação de estado no componente através de função e faz o gerenciamento do estado do componente e retorna um array
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Registrar = () => {
    const [video, setVideo] = useState({
      nome: '',
      url: '',
      autor: '',
      letra: '',
    });
}

export default function Cadastro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("lista"))|| [];
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);//"estado" para contar os ids

    const listaLocalStorageL = JSON.parse(localStorage.getItem("listaLetra"))|| [];
    const [idL, setIdL] = useState(listaLocalStorageL [listaLocalStorageL.length - 1]?.id + 1 || 1);

    const listaLocalStorageA = JSON.parse(localStorage.getItem("listaAutor"))|| [];
    const [idA, setIdA] = useState(listaLocalStorageA [listaLocalStorageA.length - 1]?.id + 1 || 1);

    const [idUsuario, setIdUsuario] = useState(1);
    const [listaUsuario, setListaUsuario] = useState([]);//definir que listaUsuario será um array
    const [nome, setNome] = useState("");//definir que nome será um array

    const [idURL, setIdURL] = useState(1);
    const [listaVideo, setListaVideo] = useState([]);
    const [url, setURL] = useState("");

    const [idLetra, setIdLetra] = useState(1);
    const [listaLetra, setlistaLetra] = useState([]);
    const [letra, setLetra] = useState("");

    const [idAutor, setIdAutor] = useState(1);
    const [listaAutor, setlistaAutor] = useState([]);
    const [autor, setAutor] = useState("");

    useEffect(()=>{localStorage.setItem("lista", JSON.stringify(listaUsuario))},[listaUsuario]);
    useEffect(()=>{localStorage.setItem("listaLetra", JSON.stringify(listaLetra))},[listaLetra]);
    useEffect(()=>{localStorage.setItem("listaAutor", JSON.stringify(listaAutor))},[listaAutor]);
    
    useEffect(()=>{localStorage.setItem("lista", JSON.stringify(listaVideo))},[listaVideo]);

    const navigate =  useNavigate();

    const [cadastro, setCadastro] = useState(false);
  
    const salvar = (e) => {
      e.preventDefault();
      const videos = JSON.parse(localStorage.getItem('videos')) || [];
      videos.push(video);
      localStorage.setItem('videos', JSON.stringify(videos));
      setCadastro(true);
      navigate('/');
    };
/* 
    const salvar = async (e) => {
       e.preventDefault();
       await setLista([...lista, {
        id: id,
        nome: nome, 
        letra: letra,
        url: url,
        autor: autor
       }]);
       setId(id + 1);
       navigate("/");
    } */

    const salvarN = (e) => {//para coletar o nome do usuário
        e.preventDefault();//previnir a ação de enviar o formulário; preventDefault serve para prevenir o comportamento padrão de um evento; evitar que a página seja redirecionada automaticamente
        setListaUsuario([...listaUsuario, {
            nome: nome,
            id: idUsuario //conceder o id atual
        }]);
        setIdUsuario(id + 1);
        setNome("");
        console.log(listaUsuario);
    };

    const salvarURL = (e) => {//para coletar o nome do usuário
        e.preventDefault();//previnir a ação de enviar o formulário; preventDefault serve para prevenir o comportamento padrão de um evento; evitar que a página seja redirecionada automaticamente
        setListaVideo([...listaVideo, {
            url: url,
            id: idUsuario //conceder o id atual
        }]);
        setIdURL(id + 1);
        setURL("");
        console.log(listaVideo);
    };

    const salvarLetra = (e) => {
        e.preventDefault();
        setlistaLetra([...listaLetra, {
            letra: letra,
            idL: idLetra
        }]);
        setIdLetra(idL + 1);
        setLetra("");
        console.log(listaLetra);
    };

    const salvarAutor = (e) => {
        e.preventDefault();
        setlistaAutor([...listaAutor, {
            autor: autor,
            idA: idAutor
        }]);
        setIdAutor(idA + 1);
        setAutor("");
        console.log(listaAutor);
    };

    return (
        <div class="container">
            <Link to="/">home</Link>
            <h1>O DRAMA, O TEATRO E A ATUAÇÃO</h1>
        
        <div>
            <h4>Nome da música</h4>
            <form class="form" onSubmit={salvar}>
                <input type="text"
                    value={nome}
                    onChange={(e) => { setCadasro(e.target.value) }} />
                <button>Nome da música:</button>
            </form>
            <br></br>
            <h4>Letra da música</h4>
            <form class="form" onSubmit={salvarLetra}>
                <input type="text"
                    value={letra}
                    onChange={(e) => { setLetra(e.target.value) }} />
                <button>Letra da música:</button>
            </form>
           
            <br></br>
            <h4>Artista:</h4>
           
            <form class="form" onSubmit={salvarAutor}>
                <input type="text"
                    value={autor}
                    onChange={(e) => { setAutor(e.target.value) }} />
                <button>Autor</button>
            </form>
            <br></br>
            
            <div className="form-group">
              <label htmlFor="url">URL do Vídeo:</label>
              <input
                type="url"
                id="url"
                name="url"
                value={video.url}
                onChange={(e) => setVideo({ ...video, url: e.target.value })}
              />
            </div>

{/* 
            <h4>URL:</h4>
            <form class="form" onSubmit={salvarURL}>
                <input type="text"
                    value={url}
                    onChange={(e) => { setURL(e.target.value) }} />
                <button>URL:</button> */}

                <br></br>
                <br></br>
                
                <form class="registrar" onSubmit={salvar}>
                <input type="text"
                    value={id}
                    onChange={(e) => { setId(e.target.value) }} />
                <button>Registar</button>
            </form>

            <br></br>

               </form>
              
            </div>
    );
}
