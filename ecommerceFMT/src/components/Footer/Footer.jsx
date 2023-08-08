import React from "react";
import { Link } from 'react-router-dom';

import "../Footer/Footer.css";

import {
  FaFacebookSquare,
  FaInstagram, 
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="d-flex flex-row justify-content-evenly bg-info pb-3 footer mt-5">
        <div className="d-flex flex-column mt-5">
          <h2>Contato</h2>
          <ul className="contato">
            <li className="contato-li"> FAQ</li>
            <li className="contato-li">Trocas e Privacidade</li>
            <li className="contato-li">Termos e Condições</li>
            <li className="contato-li"><Link className="list-group-item" to={"/contato"}>Entre em Contato</Link> </li>
          </ul>
        </div>

        <div className="d-flex flex-column mt-5">
          <h2>Institucional</h2>
          <ul className="contato">
            <li className="contato-li">Quem Somos</li>
            <li className="contato-li">Nossas Lojas</li>
            <li className="contato-li">Trabalhe Conosco</li>
            <li className="contato-li">Seja um parceiro</li>
          </ul>
        </div>
        <div>
          <ul className="contato d-flex flex-column gap-4 m-5">
            <li className="icons">
              <FaInstagram className="icon-li"></FaInstagram>
            </li>
            <li className="icons">
              <FaFacebookSquare className="icon-li"></FaFacebookSquare>
            </li>
          </ul>
        </div>
      </div>
   
    </>
  );
}

export default Footer;
