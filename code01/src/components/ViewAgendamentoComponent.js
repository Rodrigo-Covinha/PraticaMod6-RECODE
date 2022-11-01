import React, { Component } from 'react'
import AgendamentoService from '../services/AgendamentoService'
import { Link } from 'react-router-dom';

class ViewAgendamentoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            agendamento: {}
        }
    }
    componentDidMount() {
        AgendamentoService.getAgendamentoById(this.state.id).then(res => {
            this.setState({ agendamento: res.data });
        })
    }

    render() {
        return (

            <React.Fragment>
                <container className='container-fluid'>
                    <div>
                        <div id='viewcard' className="card col-md-8 offset-md-3">
                            <h3 className="text-center"> Info do Agendamento</h3>
                            <div className="card-body">
                                <div id='viewtable' className="row col-md-8 offset-md-3">
                                    <table className="table table-striped table-bordered ">
                                        <thead>
                                            <tr>
                                                <th> Origem</th>
                                                <th> Destino</th>
                                                <th> Data de Partida</th>
                                                <th> Data da Volta</th>
                                                <th> N° de Adultos</th>
                                                <th> N° de Crianças</th>
                                                <th> Classe</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td> {this.state.agendamento.origem}</td>
                                                <td> {this.state.agendamento.destino}</td>
                                                <td> {this.state.agendamento.dataIda}</td>
                                                <td> {this.state.agendamento.dataVolta}</td>
                                                <td> {this.state.agendamento.qtdAdulto}</td>
                                                <td> {this.state.agendamento.qtdCrianca}</td>
                                                <td> {this.state.agendamento.classe}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='voltarbtn'>
                                            <Link to={'/agendamentos'} > <button href='/agendamentos' className="btn btn-info"  >Voltar</button></Link>
                                        </div>
                            </div>
                        </div>
                    </div>
                </container>
            </React.Fragment>
        )
    }
}
export default ViewAgendamentoComponent