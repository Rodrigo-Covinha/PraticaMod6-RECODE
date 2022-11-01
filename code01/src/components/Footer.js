import React from 'react';
import {  faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/Index.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <React.Fragment>
            <footer id="footer-bs">
          <div className="row">
            <div id='footer-brand' className="col-xl animated fadeInLeft">
                <h2 ><a id="logo-footer" href="?"><img alt='logo' src={require("../assets/logo/CODE-travel-border-SF1.png")} /></a></h2>
                  <p>A CODE=TRAVEL é a agencia de viagens que veio para mudar sua experiencia ao viajar, um modelo de negocio moderno 
                    e inovador usando o que há de mais avançado de tecnologia, desde a procura por destino para Curtir ou Descansar. 
                     Rápido e seguro você vai mais longe com a gente !</p>
              </div>
            <div id='footer-nav' className="col-sm-2  animated fadeInUp">
                <h4> Menu </h4>
                 
                      <ul className="pages">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/agendamentos">Destinos</Link></li>
                          <li><Link to="/Ofertas">Ofertas</Link></li>
                          <li><Link to="/Contato">Contato</Link></li>
                      </ul>
                
                
              </div>
            <div id='footer-social' className="col-sm-2 animated fadeInDown">
                <h4>Siga-Nos</h4>
                <ul>
                    <div className='iconface'>
                    <li className='facebook'><a  href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a></li>
                    </div>
                    <div className='icontwitter'>
                    <li className='twitter'><a  href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a></li>
                    </div>
                    <div className='iconinsta'>
                    <li className='instagram'><a  href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    </div>
                    
                  </ul>
              </div>
            <div className='col-xl ' id="footer-ns">
                <h4>Newsletter</h4>
                  <p id="newsletter">Inscreva-se para receber ofertas exclusivas! </p>
                  
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Inscreva seu e-mail..."/>
                        <span className="input-group-btn">
                          <button className="btn-news" type="button"><FontAwesomeIcon icon={faEnvelope} /></button>
                         </span> 
                      </div>
                   
              </div>
          </div>
      </footer>
      <div>
            <p id="copyright"> Copyright © 2022, CODE TRAVEL</p>
           
    </div>



        </React.Fragment>
    )
}

export default Footer;