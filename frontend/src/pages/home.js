import React from 'react';

import '../styles/page.css'
import working from '../assets/trabalhando.jpeg';
import witheStool from '../assets/bancos-brancos.jpeg';
import bookCaseWorkshop from '../assets/estante-oficina.jpeg';
import spiceContainer from '../assets/porta-temperos-branco.jpeg';
import plantas from '../assets/plantas.jpeg';
import port_temp_pote from '../assets/porta-temperos-pote.jpeg';
import chaveiro2 from '../assets/chaveiro2.jpeg';
import comoda from '../assets/comoda.jpeg';

function landing() {
  return (
    <div className="App">
      <div id="page-home">
        <main>
          <div className="workshop">
            <div className="workshop-title">
              <legend>Workshop</legend>
              <hr />
            </div>

            <div className="workshop-items">
              <div className="items-grid">
                <li>
                  <img src={working} alt="working" />
                </li>
                <li>
                  <img src={witheStool} alt="witheStool" />
                </li>
                <li>
                  <img src={bookCaseWorkshop} alt="bookCaseWorkshop" />
                </li>
                <li>
                  <img src={spiceContainer} alt="spiceContainer" />
                </li>
              </div>
            </div>

          </div>

          <div className="news">
            <div className="news-title">
              <legend>News</legend>
              <hr />
            </div>

            <div className="news-items">
              <div className="items-grid">
                <li>
                  <img src={plantas} alt="estante para plantas" />
                  <p>Estante decorativa para colocar plantas de diversos tipos.</p>
                  <div className="price">
                    <strong>R$ 80,00</strong>
                  </div>
                </li>
                <li>
                  <img src={port_temp_pote} alt="porta temperos com potes" />
                  <p>Porta temperos ornamentado com local para potes e papel toalha.</p>
                  <div className="price">
                    <strong>R$ 40,00</strong>
                  </div>
                </li>
                <li>
                  <img src={chaveiro2} alt="porta chaves" />
                  <p>Porta chaves ornamentado cozinheiro</p>
                  <div className="price">
                    <strong>R$ 20,00</strong>
                  </div>
                </li>
                <li>
                  <img src={comoda} alt="comoda" />
                  <p>Mini comoda com acabamento polido (barcos não inclusos)</p>
                  <div className="price">
                    <strong>R$ 60,00</strong>
                  </div>
                </li>

              </div>
            </div>

          </div>

        </main>

        <footer>
          <p>whatsapp</p>
          <p>email</p>
          <p>fomulário de contato</p>
        </footer>
      </div>
    </div>
  );
}

export default landing;