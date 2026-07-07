//Atividade: Incluir campo necessario para integração com backend e registrar 2 usuarios novos
import { useState } from "react";
import "./register.css";
import axios from "axios";

function Registrar() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const tamanhoSenha = senha.length >= 8;

    const manipularNome = (e) => { 
        setNome(e.target.value);
        console.log(nome)
    };
    const manipularIdade = (e) => {
        setIdade(e.target.value);
        console.log(idade)
    };
    const manipularEmail = (e) => {
        setEmail(e.target.value);
        console.log(email)
    };
    const manipularSenha = (e) => {
        setSenha(e.target.value);
        console.log(senha)
    };

    const manipularBotao = async () => {
        try {
            const response = await
                axios.post('http://localhost:5000/registrar', {
                    nome: nome,
                    email: email,
                    senha: senha,
                    confirma_senha:senha,
                }, {
                })
        }
        catch (e) { }
    }

    return (
        <form className="formRegistro">Registrar novo usuário
            <label className="labelRegistro">Nome</label>
            <input className="inputRegistro" onChange={manipularNome}></input>
            <label className="labelRegistro">Idade</label>
            <input className="inputRegistro" onChange={manipularIdade}></input>
            <label className="labelRegistro" >E-mail</label>
            <input className="inputRegistro" onChange={manipularEmail}></input>
            <label className="labelRegistro">Senha</label>
            <input className="inputRegistro" onChange={manipularSenha}></input>
            <label className="labelRegistro">
                <input
                    type="checkbox"
                    checked={tamanhoSenha}
                    readOnly
                />
                minimo 8 caracteres
            </label>
            <button className="buttonRegistro" onClick={manipularBotao} > Enviar </button>
        </form>
    )
}

export default Registrar;