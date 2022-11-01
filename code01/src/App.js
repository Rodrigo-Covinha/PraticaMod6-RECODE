import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateAgendamentoComponent from './components/CreateAgendamentoComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import ListAgendamentoComponent from './components/ListAgendamentoComponent';
import ViewAgendamentoComponent from './components/ViewAgendamentoComponent';
import Contato from './pages/Contato/Contato';
import Destinos from './pages/Destinos/Destinos';
import Login from './pages/Login/Login';
import Main from './pages/Main/Home';
import Ofertas from './pages/Ofertas/Ofertas';


function App() {

  return (
   
    <div>
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Destinos" component={Destinos} />
        <Route path="/agendamentos" component={ListAgendamentoComponent} />
        <Route path="/agendamentos" component={ListAgendamentoComponent} />
        <Route path="/add-agendamento/:id" component={CreateAgendamentoComponent} />
        <Route path="/view-agendamento/:id" component={ViewAgendamentoComponent} />
        <Route path="/Ofertas" component={Ofertas} />
        <Route path="/Contato" component={Contato} />
        <Route path="/Login" component={Login} />
      </Switch>

      <Footer />
    </BrowserRouter>
      </div >

   
  );
}

export default App;
