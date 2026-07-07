//Atividade: criar rotas de vagas e pagina de post
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/main";
import Cadastro from "./pages/cadastro";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< HomePage />}/>
           <Route  path="/registrar"  element = {< Cadastro />}/> 
           </Routes>
       </BrowserRouter>
   )
}

export default App;