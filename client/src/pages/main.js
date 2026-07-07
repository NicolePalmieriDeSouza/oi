//Atividade: Gerar landing Page e links/botoes para cadastro, login e vagas, ao logar ir para HomePage (utilizem o menu lateral)
//ao logar salvar e utilizar o JWT token
import './main.css';
import PostBox from '../components/postbox.js';
import { useEffect, useState } from 'react';
import PopUp from '../components/popUp.js';
import MyHeader from "../components/header.js"
import '../assets/image-removebg-preview.jpg';

function HomePage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [fakeToken, setFakeToken] = useState(false);

  const manipularLoginButton = (e) => {
    setShowPopUp(true)
    setFakeToken(true)
  }

  return (
    <div className="grid-container">
      <header className="header">
        <img src="image-removebg-preview.jpg"></img>
        <MyHeader logedin={fakeToken}
          logout={() => setFakeToken(false)}
          login={manipularLoginButton}></MyHeader>

      </header>
      <aside className="sidebar">Menu Lateral</aside>
      <main className="content">
        <PopUp showPopUp={showPopUp} closePopUp={() => setShowPopUp(false)}>

        </PopUp>


        {PostBox("JUJUBA", "é doce")}
        {PostBox("Frutas", "prefiro chocolate")}

      </main>
    </div>
  );
}

export default HomePage;
