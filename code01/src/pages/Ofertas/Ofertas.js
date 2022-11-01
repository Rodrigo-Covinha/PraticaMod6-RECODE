import React from 'react';
import '../../assets/css/Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Ofertas() {
  return (




    <React.Fragment>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous" />


        <title>Ofertas CodeTravel</title>
      </head>

      <container class="container-fluid">
        <div class="px-lg-5">

          <div id="card-titulo" class="card bg-dark text-white">
            <img src={require("../../assets/img/goldengate.jpg")} class="img-fluid card-img" alt="card" />
            <div id="Viagens" class="card-img-overlay">
              <h1 class="card-title">Ofertas Incríveis</h1>
              <h2 id="text1" class="card-text">Pacotes com destinos Internacionais em promoção!</h2>
              <h4 id="text2" class="card-text">Com a CodeTravel você vai mais longe.</h4>
            </div>
          </div>
        </div>

        <section id='cards' class="row">

          <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm"><img src={require("../../assets/img/EifellParis.jpg")} alt="Paris" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5>Paris</h5>
                <p  class="small text-muted mb-0"><strong>De:<del> R$4800,00</del> Por Apenas: <text class='text-danger'>R$ 2499,00.</text></strong> </p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p class="small mb-0"><span class="font-weight-bold"><strong>PACOTE PARIS</strong></span></p>
                  <button id="pegar" class="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm"><img src={require("../../assets/img/Peru.jpg")} alt="Peru" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5> Peru</h5>
                <p class="small text-muted mb-0"><strong>De:<del> R$2300,00</del> Por Apenas: <text class='text-danger'>R$ 1099,00.</text></strong></p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p class="small mb-0"><span class="font-weight-bold"><strong>PACOTE PERU</strong></span></p>
                  <button id="pegar" class="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>


          <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm"><img src={require("../../assets/img/Italia.jpg")} alt="Italia" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5>Italia</h5>
                <p class="small text-muted mb-0"><strong>De:<del> R$2800,00</del> Por Apenas:<text class='text-danger'>R$ 2099,00.</text></strong> </p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p class="small mb-0"><span class="font-weight-bold"><strong>PACOTE ITALIA</strong></span></p>
                  <button id="pegar" class="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm"><img src={require("../../assets/img/canada.jpg")} alt="canada" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5> Canada</h5>
                <p class="small text-muted mb-0"><strong>De:<del> R$2600,00</del> Por Apenas: <text class='text-danger'>R$ 1899,00.</text></strong></p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p class="small mb-0"><span class="font-weight-bold"><strong>PACOTE CANADA</strong></span></p>
                  <button id="pegar" class="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='cards' class="row">

          <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm"><img src={require("../../assets/img/NY.jpg")} alt="NY" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5>EUA</h5>
                <p class="small text-muted mb-0"><strong>De:<del> R$2800,00</del> Por Apenas: <text class='text-danger'>R$ 1699,00.</text></strong> </p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p class="small mb-0"><span class="font-weight-bold"><strong>PACOTE EUA</strong></span></p>
                  <button id="pegar" class="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm"><img src={require("../../assets/img/JAPAN.jpg")} alt="japão" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5> Japão</h5>
                <p class="small text-muted mb-0"><strong>De:<del> R$5300,00</del> Por Apenas: <text class='text-danger'>R$ 3099,00.</text></strong></p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p class="small mb-0"><span class="font-weight-bold"><strong>PACOTE JAPÃO</strong></span></p>
                  <button id="pegar" class="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>


          <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm"><img src={require("../../assets/img/piramide.jpg")} alt="Egito" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5>Egito</h5>
                <p class="small text-muted mb-0"><strong>De:<del> R$3800,00</del> Por Apenas: <text class='text-danger'>R$ 2599,00.</text></strong> </p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p class="small mb-0"><span class="font-weight-bold"><strong>PACOTE EGITO</strong></span></p>
                  <button id="pegar" class="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm"><img src={require("../../assets/img/china.jpg")} alt="china" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5> China</h5>
                <p class="small text-muted mb-0"><strong>De:<del> R$6300,00</del> Por Apenas: <text class='text-danger'>R$ 3999,00.</text></strong></p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p class="small mb-0"><span class="font-weight-bold"><strong>PACOTE CHINA</strong></span></p>
                  <button id="pegar" class="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </container>
    </React.Fragment>

  )
}

export default Ofertas;