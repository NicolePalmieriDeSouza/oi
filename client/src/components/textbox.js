import { useState } from "react";
import "./textbox.css";
import axios from "axios";

function TextBox({ aoPublicar }) { // Adicionamos 'aoPublicar' para atualizar a tela principal
    const [textValue, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

        if (!textValue.trim()) {
            alert("Digite algo antes de enviar!");
            return;
        }

        try {
            // Preenchendo o axios.post com a URL do seu backend e os dados necessários
            const response = await axios.post("http://localhost:3001/api/posts", {
                titulo: "Nova Publicação", // Um título padrão já que o banco exige NOT NULL
                texto: textValue,          // O texto que o usuário digitou na caixinha
                userid: 101                // Um ID de usuário qualquer para testar
            });

            if (response.status === 201) {
                alert("Post enviado com sucesso!");
                setText(''); // Limpa a caixa de texto após o sucesso
                
                if (aoPublicar) aoPublicar(); // Avisa a homePage para atualizar a lista de posts automaticamente
            }
        } catch (error) {
            console.error("Erro ao enviar requisição:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <textarea 
                className="textbox" 
                placeholder="Digite aqui" 
                cols={30} 
                rows={5} 
                value={textValue} 
                onChange={handleChange}
            />
            <p></p>
            <button type="submit" className="btn-enviar">Enviar</button>
        </form>
    );
}

export default TextBox;