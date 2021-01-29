import React from 'react'

class PPN extends React.Component{
    constructor(){
        super()
        this.state = {
            harga : 0,
            ppn : 0,
            diskon : 0,
            hasil : '',
        }
    }

    Hitung = () => {
        let harga = this.state.harga
        let ppn = this.state.ppn 
        let diskon = this.state.diskon

        let a = (harga / 100) * ppn        // hitung ppn
        let b = (harga / 100) * diskon     // hitung diskon

       let result = (harga - b) + a

        this.setState ({
            hasil: "Rp." + result
        })
    }

    render(){
        return(
            <div className="App container col-sm-4">
                <div className="card-header bg-danger">
                    <h3>Hitung Harga Akhir</h3>
                </div>

                <div className="card body">
                    Harga 
                    <input type="number" className="form control"
                    value={this.state.harga}
                    onChange={ev => this.setState({harga: ev.target.value})} 
                    />

                    PPN 
                    <input type="number" className="form control"
                    value={this.state.ppn}
                    onChange={ev => this.setState({ppn: ev.target.value})} 
                    />

                    Diskon 
                    <input type="number" className="form control"
                    value={this.state.diskon}
                    onChange={ev => this.setState({diskon: ev.target.value})} 
                    />

                    <hr/>

                    <button className="btn btn-danger btn block mb-2"
                    onClick={() => this.Hitung()}>
                        Hitung
                    </button>

                    Harga Akhir 
                    <input type="string" className="form control"
                    value={this.state.hasil} readOnly
                    />

                </div>
            </div>
        )
    }
}
export default PPN;