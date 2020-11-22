import React from "react";

import "../styles/cadastro.css";

function registro() {
  return (
    <section id="cad-page">
      <form action="/posts" method="POST">
        <fieldset>
          <div className="field-arquivo">
            <label>Imagem</label>
            <input type="file" />
          </div>
          <div className="field">
            <label>Nome</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Descrição</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Altura</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Largura</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Peso</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Preço</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Quantidade</label>
            <input type="text" />
          </div>
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}

export default registro;
