import React from 'react';
import { Link } from 'react-router-dom';
import { faBars, faHome, faPhone, faPlane, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/Index.css';



//---------------------------------------------@@
function menuShow() {
  let menuMobile = document.querySelector('.listmenu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
  } else {
      menuMobile.classList.add('open');
  }
};
// ---------------------------------------------@@
function Header() {
  return (
    <React.Fragment>

      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>

        <link rel="stylesheet" href="../assets/css/index.css" />

        <title>Home CODE-Travel</title>
      </head>
    
      <header id="header" className="Header">
        <nav className="navBar">
          
          <ul className="desk">
            <a href="/"className="logo"><img alt='lg' src={require('../assets/logo/CODE-travel-border-SF1.png')} /></a>
            <li><Link to="/" className="active"> <FontAwesomeIcon icon={faHome} /> HOME</Link></li>
            <li><Link to="/agendamentos"><FontAwesomeIcon icon={faPlane} />  DESTINOS </Link></li>
            <li><Link to="/Ofertas"><FontAwesomeIcon icon={faSuitcase} />  OFERTAS</Link></li>
            <li><Link to="/Contato" className='linend'><FontAwesomeIcon icon={faPhone} />  CONTATO</Link></li>
            <Link to="/Login" className="login"><FontAwesomeIcon icon={faUser} /> ENTRE</Link>
          </ul>

          <div className="mobile">
            <div className="logo-mob">
              <a href='/'><img alt='lg' src={require("../assets/logo/CODE-travel-border-SF1.png")} /></a>
            </div>

            <div className="menu-icon">
              <button className="btn-ham" onClick={menuShow}><i id="hamburguer"><FontAwesomeIcon icon={faBars} /></i> </button>
              <div className="listmenu">
                <ul >
                  <li><Link to="/"><FontAwesomeIcon icon={faHome} /> HOME</Link></li>
                  <li><Link to="/agendamentos"><FontAwesomeIcon icon={faPlane} /> DESTINOS</Link></li>
                  <li><Link to="/Ofertas"><FontAwesomeIcon icon={faSuitcase} /> OFERTAS</Link></li>
                  <li><Link to="/Contato"><FontAwesomeIcon icon={faPhone} />  CONTATO</Link></li>
                </ul>

              </div>
            </div>
          </div>
        </nav>
      </header>
      
    </React.Fragment>
  )
}

export default Header;