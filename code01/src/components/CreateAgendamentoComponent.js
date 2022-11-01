import React, { Component } from 'react'
import AgendamentoService from '../services/AgendamentoService';



class CreateAgendamentoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            origem: '',
            destino: '',
            dataIda: '',
            dataVolta: '',
            qtdAdulto: '',
            qtdCrianca: '',
            classe: ''
        }
        this.changeOrigemHandler = this.changeOrigemHandler.bind(this);
        this.changeDestinoHandler = this.changeDestinoHandler.bind(this);
        this.changeDataIdaHandler = this.changeDataIdaHandler.bind(this);
        this.changeDataVoltaHandler = this.changeDataVoltaHandler.bind(this);
        this.changeQtdAdultoHandler = this.changeQtdAdultoHandler.bind(this);
        this.changeQtdCriancaHandler = this.changeQtdCriancaHandler.bind(this);

        this.saveOrUpdateAgendamento = this.saveOrUpdateAgendamento.bind(this);
    }
    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            AgendamentoService.getAgendamentoById(this.state.id).then((res) => {
                let agendamento = res.data;
                this.setState({
                    origem: agendamento.origem,
                    destino: agendamento.destino,
                    dataIda: agendamento.dataIda,
                    dataVolta: agendamento.dataVolta,
                    qtdAdulto: agendamento.qtdAdulto,
                    qtdCrianca: agendamento.qtdCrianca,
                    classe: agendamento.classe
                });
            });
        }
    }
    saveOrUpdateAgendamento = (e) => {
        e.preventDefault();

        let agendamento = {
            origem: this.state.origem, destino: this.state.destino, dataIda: this.state.dataIda,
            dataVolta: this.state.dataVolta, qtdAdulto: this.state.qtdAdulto, qtdCrianca: this.state.qtdCrianca, classe: this.state.classe
        };
        console.log('agendamento => ' + JSON.stringify(agendamento));
        if (this.state.id === '_add') {
            AgendamentoService.createAgendamento(agendamento).then(res => {
                this.props.history.push('/agendamentos');
            });
        } else {
            AgendamentoService.updateAgendamento(agendamento, this.state.id).then(res => {
                this.props.history.push('/Agendamentos');  
            });
        }
    }
    changeOrigemHandler = (event) => {
        this.setState({ origem: event.target.value });
    }
    changeDestinoHandler = (event) => {
        this.setState({ destino: event.target.value });
    }
    changeDataIdaHandler = (event) => {
        this.setState({ dataIda: event.target.value });
    }
    changeDataVoltaHandler = (event) => {
        this.setState({ dataVolta: event.target.value });
    }
    changeQtdAdultoHandler = (event) => {
        this.setState({ qtdAdulto: event.target.value });
    }
    changeQtdCriancaHandler = (event) => {
        this.setState({ qtdCrianca: event.target.value });
    }
    changeQtdClasseHandler = (event) => {
        this.setState({ classe: event.target.value });
    }

    cancel() {
        this.props.history.push('/agendamentos');
    }
    getTitle() {
        if (this.state.id === '_add') {
            return <h1 className="text-center">Cadastrar Passagem</h1>
        } else {
            return <h1 className="text-center">Alterar Dados da Passagem</h1>
        }
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <container id="form1" className="container-fluid">
                        <div className="col-md-12 col-md-offset-1">
                            <div className="booking-form">
                                <form>
                                    <div className="form-group">
                                        {
                                            this.getTitle()
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <span className="form-label">Origem: </span>
                                                <input className="form-control" name="origem" value={this.state.origem} onChange={this.changeOrigemHandler}
                                                    type="text" placeholder="Cidade de origem" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <span className="form-label">Destino: </span>
                                                <input className="form-control" name="destino" value={this.state.destino} onChange={this.changeDestinoHandler}
                                                    type="text" placeholder="Cidade de Destino" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <span className="form-label">Data de Ida</span>
                                                <input className="form-control" name="dataIda" value={this.state.dataIda} onChange={this.changeDataIdaHandler} type="date" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <span className="form-label">Data de Volta</span>
                                                <input className="form-control" name="dataVolta" value={this.state.dataVolta} onChange={this.changeDataVoltaHandler} type="date" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <span className="form-label" >Adultos (18+)</span>
                                                <select className="form-control" name="qtdAdulto" value={this.state.qtdAdulto} onChange={this.changeQtdAdultoHandler}  placeholder="Select">
                                                
                                                    <option>Selecione</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <span className="form-label">Crianças (0-17)</span>
                                                <select className="form-control" name="qtdCrianca" value={this.state.qtdCrianca} onChange={this.changeQtdCriancaHandler}>
                                                    <option>Selecione</option>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <span className="form-label">Escolha classe: </span>
                                                <select className="form-control"  name="classe" value={this.state.classe} onChange={this.changeQtdClasseHandler}>
                                                   
                                                    <option>Selecione </option>   
                                                    <option>Primeira Classe</option>
                                                    <option>Classe Econômica</option>
                                                    <option>Classe Executiva</option>

                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn">
                                        <button className="submit-btn" onClick={this.saveOrUpdateAgendamento}>Salvar / Mostrar Passagens</button>
                                    </div>
                                    <br/>       
                                    <div className="form-btn">
                                        <button className="reset-btn" onClick={this.cancel.bind(this)}>Voltar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </container>
                </main>
            </React.Fragment>
        )
    }
}
export default CreateAgendamentoComponent