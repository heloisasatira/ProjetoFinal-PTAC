import { useState, useEffect } from "react";// useState permite a criação de estado no componente através de função e faz o gerenciamento do estado do componente e retorna um array
import { Link } from "react-router-dom";
import "./style.css";

export default function Cadastro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("lista"))|| [];
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);//"estado" para contar os ids

    const listaLocalStorageL = JSON.parse(localStorage.getItem("listaLetra"))|| [];
    const [idL, setIdL] = useState(listaLocalStorageL [listaLocalStorageL.length - 1]?.id + 1 || 1);

    const [idUsuario, setIdUsuario] = useState(1);
    const [listaUsuario, setListaUsuario] = useState([]);//definir que listaUsuario será um array
    const [nome, setNome] = useState("");//definir que nome será um array

    const [idURL, setIdURL] = useState(1);
    const [listaVideo, setListaVideo] = useState([]);
    const [url, setURL] = useState("");

    const [idLetra, setIdLetra] = useState(1);
    const [listaLetra, setlistaLetra] = useState([]);
    const [letra, setLetra] = useState("");

    useEffect(()=>{localStorage.setItem("lista", JSON.stringify(listaUsuario))},[listaUsuario]);
    useEffect(()=>{localStorage.setItem("listaLetra", JSON.stringify(listaLetra))},[listaLetra]);
    
    useEffect(()=>{localStorage.setItem("lista", JSON.stringify(listaVideo))},[listaVideo]);

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


    return (
        <div class="container">
            <Link to="/">home</Link>
            <h1>O DRAMA, O TEATRO E A ATUAÇÃO</h1>
            <p>"Drama, que em grego significa “ação”, é um gênero literário surgido na Grécia Antiga como, originalmente, uma forma de louvação religiosa ao deus Dionísio (Baco). Compõem o gênero dramático os textos em prosa ou em verso feitos para serem encenados no palco."
Veja mais sobre "Gênero dramático" em: https://brasilescola.uol.com.br/literatura/genero-dramatico.htm</p>

            <div class="box">
                    <div class="row"> <img src="https://i.pinimg.com/564x/39/c5/ef/39c5efbf8b5a81c880572a9671468070.jpg"/>
                      <span>Noite Estrelada, Van Gogh</span>
                    </div>
                </div>     
                <div class="box">
                    <div class="row"> <img src="https://norfipc.com/fotos/arte/Vincent-van-Gogh-Wheat-Field-with-Cypresses-1889.jpg"/>
                    <span>Campo de Trigo com ciprestes, Van Gogh</span></div> 
                </div>
                <div class="box">
                    <div class="row"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJiW5pU69MVRTmyMqwQzLzxIYt3Kzyhk0OA&usqp=CAU"/>
                    <span> O Quarto, Van Gogh</span></div> 
                </div>


            <h4>Nome da música</h4>
            <form class="form" onSubmit={salvarN}>
                <input type="text"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }} />
                <button>nome de usuário</button>
            </form>

            <form class="form" onSubmit={salvarLetra}>
                <input type="text"
                    value={letra}
                    onChange={(e) => { setLetra(e.target.value) }} />
                <button>Letra da sua música</button>
            </form>

            <form class="form" onSubmit={salvarURL}>
                <input type="text"
                    value={url}
                    onChange={(e) => { setURL(e.target.value) }} />
                <button>URL</button>
            </form>
        </div>
    );
}
