import React, { Component } from 'react'
import AgendamentoService from '../services/AgendamentoService'
import '../assets/css/Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class ListAgendamentoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agendamentos: []
        }
        this.addAgendamento = this.addAgendamento.bind(this);
        this.editAgendamento = this.editAgendamento.bind(this);
        this.deleteAgendamento = this.deleteAgendamento.bind(this);
    }
    deleteAgendamento(id) {
        AgendamentoService.deleteAgendamento(id).then(res => {
            this.setState({ agendamentos: this.state.agendamentos.filter(agendamento => agendamento.id !== id) });
        });
    }
    viewAgendamento(id) {
        this.props.history.push(`/view-agendamento/${id}`);
    }
    editAgendamento(id) {
        this.props.history.push(`/add-Agendamento/${id}`);
    }
    componentDidMount() {
        AgendamentoService.getAgendamentos().then((res) => {
            this.setState({ agendamentos: res.data });
        });
    }
    addAgendamento() {
        this.props.history.push('/add-agendamento/_add');
    }

    render() {
        return (
           <main> 
            <container id='listaAgenda' className='container-fluid'>
                <h2 className="text-center">Lista de Agendamentos</h2>
                <div className="row">
                    <div className='container-btn'>
                    <button className="btn btn-info " onClick={this.addAgendamento}> Criar Agendamento</button>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Origem</th>
                                <th> Destino</th>
                                <th> Data de Ida</th>
                                <th> Data da Volta</th>
                                <th> N° Adultos</th>
                                <th> N° Crianças</th>
                                <th> Classe</th>
                                <th> Navigation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.agendamentos.map(
                                    agendamento =>
                                        <tr key={agendamento.id}>
                                            <td> {agendamento.origem}</td>
                                            <td> {agendamento.destino}</td>
                                            <td> {agendamento.dataIda}</td>
                                            <td> {agendamento.dataVolta}</td>
                                            <td> {agendamento.qtdAdulto}</td>
                                            <td> {agendamento.qtdCrianca}</td>
                                            <td> {agendamento.classe}</td>
                                            <td>
                                                <button onClick={() => this.editAgendamento(agendamento.id)} className="btn btn-success">Alterar </button>
                                                <button style={{ marginLeft: "5px" }} onClick={() => this.deleteAgendamento(agendamento.id)} className="btn btn-danger">Apagar </button>
                                                <button style={{ marginLeft: "5px" }} onClick={() => this.viewAgendamento(agendamento.id)} className="btn btn-info">Visualizar </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </container>
            </main>  
        )
    }
}
export default ListAgendamentoComponent