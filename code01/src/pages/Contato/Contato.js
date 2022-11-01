import React from 'react';
import '../../assets/css/Index.css';

function Contato() {
  return (


    <React.Fragment>



<container id="caixa" class="container z-depth-1 my-5 px-0" width="100vw" margin="0">
        <section id="background" class="my-md-6">

          <div id='corpo' class="rgba-black-strong rounded p-5">


            <h3 id="titulo" class="text-center font-weight-bold text-white mt-3 mb-5">Contate-Nos</h3>

            <form class="my-md-5" action="">

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="card">
                    <div class="card-body px-4">


                      <div class="md-form md-outline mt-0">
                        <input type="text" placeholder="Ex : Steve Jobs" id="name" class="form-control" />
                        <label for="name" ></label>
                      </div>

                      <div class="md-form md-outline">
                        <input type="email" placeholder="jobsteve@icloud.com" id="email" class="form-control" />
                        <label for="email"></label>
                      </div>

                      <div class="md-form md-outline">
                      <textarea id="message" placeholder="Sua Mensagem..."class="md-textarea form-control" rows="100"></textarea>
                        <label for="message"></label>
                      </div>

                      <button type="submit" class="btn btn-primary btn-md btn-block ml-0 mb-0">Enviar</button>

                    </div>
                  </div>

                </div>
                <div id="adress" class="col-md-5 offset-md-1 mt-md-4 mb-4 white-text">

                  <h5 class="font-weight-bold">Endereço</h5>
                  <p class="mb-0">Av. Rio Branco, 2022</p>
                  <p class="mb-0">Rio de Janeiro, Rj</p>
                  <p class="mb-4 pb-2">Brasil</p>

                  <h5 class="font-weight-bold">Telefone</h5>
                  <p class="mb-4 pb-2"> 55 21 2022-2022</p>

                  <h5 class="font-weight-bold">E-mail</h5>
                  <p>contato@codetravelagency.com</p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </container>

    </React.Fragment>
  )
}

export default Contato;