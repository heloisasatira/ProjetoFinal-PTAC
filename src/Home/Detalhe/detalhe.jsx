import { useParams } from "react-router-dom";
import Card from "../../Componentes/Card";
export default function Detalhe(){

    const{id} = useParams();
    const lista = JSON.parse( localStorage.getItem("lista"));

    const obra = lista.filter((user) => {
        if(user.id == id){
            return user;
        }
        return null;
    })
    console.log(obra);
    
    return (
        <Card arte={obra[0]}/>
    )
}