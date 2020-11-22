import React from "react";

function login() {
  return (
    <div className="login-page">
      <form>
        <fieldset>
          <div className="field">
            <label>Nome</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Senha</label>
            <input type="password" />
          </div>
        </fieldset>
        <button>Entrar</button>
      </form>
    </div>
  );
}

export default login;
