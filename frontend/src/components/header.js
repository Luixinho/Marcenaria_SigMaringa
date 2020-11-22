import React from "react";

import "../styles/header.css";
import Logo from "../assets/logomarca.jpeg";
import iconeBanco from "../assets/banco-icon.png";
import searchIcon from "../assets/icons8-search.svg";

function header() {
  return (
    <header>
      <div className="header-top">
        <img src={Logo} alt="LOGO" />
        <div className="search">
          <img src={searchIcon} alt="search-icon" />
          <input type="text" />
        </div>

        <a href="/login">Entrar</a>
        <a href="/upload">Cadastrar produto</a>
      </div>

      <div className="header-bottom">
        <div className="elements">
          <button>
            <span>
              <img src={iconeBanco} alt="incone-banco" />
            </span>
            <strong>Chaveiros</strong>
          </button>
          <button>
            <span>
              <img src={iconeBanco} alt="incone-banco" />
            </span>
            <strong>Estantes</strong>
          </button>
          <button>
            <span>
              <img src={iconeBanco} alt="incone-banco" />
            </span>
            <strong>Bancos</strong>
          </button>
          <button>
            <span>
              <img src={iconeBanco} alt="incone-banco" />
            </span>
            <strong>Tábuas de carne</strong>
          </button>
          <button>
            <span>
              <img src={iconeBanco} alt="incone-banco" />
            </span>
            <strong>Porta tempeiros</strong>
          </button>
        </div>
      </div>
    </header>
  );
}

export default header;
