// Importando Use Navigate para navegar entre as páginas
import { useNavigate } from "react-router-dom"
import React, { Component } from "react";
// Importando CSS e Imagens do Projeto
import '../../css/Header.scss';
import Logo from '../../img/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import ButtonMenu from "./ButtonMenu";

// Função Principal
function Header({ }) {
    // Definindo a navegação entre as páginas
    const navigate = useNavigate();
    const handleHome = () => {
        return navigate("/")
    };
    const handleSobre = () => {
        return navigate("/sobre")
    };
    const handleEquipe = () => {
        return navigate("/Equipe")
    };
    const handleNovaConta= () => {
        return navigate("/NovaConta")
    };
    const handleAlergias = () => {
        return navigate("/Alergias")
    };
    const handleIntolerancias = () => {
        return navigate("/Intolerâncias")
    };
    const handleButtonLogin = () => {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}} className="action_btn">
                <ButtonMenu redirect={handleNovaConta} itemMenu="Sing Up"/>
                <FontAwesomeIcon icon={faUser} color="#FFECD6" style={{backgroundColor: "#FF8F8F", padding:10, borderRadius: "2rem"}}/>
            </div>
        )
    }
    // Html
    return (
        <header className="Header_menu">
            <div className="logo"><a href="index.html"><img src={Logo} alt="" width="180rem" /></a></div>
            <nav className="navbar">
                <div className="links">
                    <ButtonMenu redirect={handleEquipe} itemMenu="Sobre" />
                    <ButtonMenu redirect={handleEquipe} itemMenu="Nossa Equipe" />
                    <ButtonMenu redirect={handleEquipe} itemMenu="Alergias" />
                    <ButtonMenu redirect={handleEquipe} itemMenu="Intolerâncias" />
                </div>
                {handleButtonLogin()}
            </nav>
            {/* <div class="dropdown_menu">
            <li><button href="index.html">Home</button></li>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Sobre"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Nossa Equipe"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Alergias"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Intolerâncias"/>
                    <ButtonMenu redirect={handleLogin} itemMenu="Login" btnClass="action_btn"/>
            </div> */}
        </header>
    )
}
;

export default Header;