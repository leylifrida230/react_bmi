import React from "react"

class Bank extends React.Component{
    constructor(){
        super()
        this.state = {
            nominal : 0,
            bunga : 0,
            periode : 0,
            hasil : 0,

        }
    }

    Hitung = () => {
        let nominal = this.state.nominal
        let bunga = this.state.bunga
        let periode = this.state.periode

        let a = nominal/periode
        let b = ((nominal*bunga)/100)/periode

        let result = a + b

        this.setState ({
            hasil: result
        })
    }

    render(){
        return(
            <div className="App container col-sm-4">
                <div className="card-header bg-primary">
                    <h3>Cicilan Bank</h3>
                </div>

                <div class="card body">
                    Nominal 
                    <input type="number" className="form control"
                    value={this.state.nominal}
                    onChange={ev => this.setState({nominal: ev.target.value})} 
                    />

                    Bunga  
                    <input type="number" className="form control"
                    value={this.state.bunga}
                    onChange={ev => this.setState({bunga: ev.target.value})} 
                    />

                    Periode 
                    <select className="form control" 
                    value={this.state.periode}
                    onChange={ev => this.setState({periode: ev.target.value})}>
                        <option value = {1}>0</option>
                        <option value = {6}>6 Bulan</option>
                        <option value = {12}>12 Bulan</option>
                        <option value = {24}>24 Bulan</option>
                    </select>

                    <button className="btn btn-primary btn block mb-1"
                    onClick={() => this.Hitung()}>
                        Hitung
                    </button>

                    Nilai Cicilan
                    <input type="number" className="form control"
                    value={this.state.hasil} readOnly />



                </div>

            </div>
        )
    }
}
export default Bank;