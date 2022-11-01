import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/Index.css';

function Home() {
    return (
        <container>
            <main className="tittle">
                <div className='homebtn'>
                    <h1 id='Titulo'> Venha Viajar com a gente!  </h1>
                    <Link to="/agendamentos"><button type="submit" className="entre"> Entre</button></Link>
                </div>
            </main>



        </container>
    )
}

export default Home;