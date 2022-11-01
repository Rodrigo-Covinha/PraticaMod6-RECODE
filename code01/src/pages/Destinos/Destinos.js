import React from 'react';
import '../../assets/css/Index.css';



function Destinos() {
  return (
  
<React.Fragment>
      
    <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>


        <title>Home CODE-Travel</title>
      </head>

        <container id="form1" className="container">
          <div className="col-md-12 col-md-offset-1">
            <div className="booking-form">
              <form>
                <div className="form-group">
                  <h1>Encontre Um Destino</h1>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <span className="form-label">Origem: </span>
                      <input className="form-control" type="text" placeholder="Cidade de origem" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <span className="form-label">Destino: </span>
                      <input className="form-control" type="text" placeholder="Cidade de Destino" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <span className="form-label">Data de Ida</span>
                      <input className="form-control" type="date" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <span className="form-label">Data de Volta</span>
                      <input className="form-control" type="date" required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="form-label">Adultos (18+)</span>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="form-label">Crianças (0-17)</span>
                      <select className="form-control">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="form-label">Escolha classe: </span>
                      <select className="form-control">
                        <option>Classe Econômica</option>
                        <option>Classe Executiva</option>
                        <option>Primeira Classe</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                </div>
                <div className="form-btn">
                  <button className="submit-btn">Mostrar Passagens</button>
                </div>

                <div className="form-btn">
                  <button className="reset-btn">Limpar Cadastro</button>
                </div>
              </form>
            </div>
          </div>
        </container>
      
</React.Fragment>

  )
}

export default Destinos;