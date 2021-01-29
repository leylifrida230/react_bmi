import React from "react"
import Alert from '../Component/Alert'

/**
 * aplikasi untuk menghitung BMI
 * 1. user masukkan nilai berat badan (kg)
 * 2. user masukkan nilai tinggi badan (m)
 * 3. program menghitung nilai BMI
 * 4. menemtukan status BMI
 * 
 * variabel: berat, tinggi, hasil angka, status
 */

class BMI extends React.Component{
    constructor(){
        super()
        this.state = {
            berat: 0,
            tinggi: 0,
            hasil: 0,
            status: "",
            type: ""
        }
    }
    
    HitungBMI = () => {
        // tampung data tinggi dan berat (input user)
        let tinggi = this.state.tinggi
        let berat = this.state.berat
        
        let result = berat / (tinggi*tinggi)
        let status = ""
        let type = ""

        if (result < 18.5){
            status = "kurang berat badan"
            type= "danger"
        }
        else if (result >= 18.5 && result <= 24.9){
            status = "normal (ideal)"
            type= "success"
        }
        else if (result >= 24.9 && result <= 29.9){
            status = "kelebihan berat badan"
            type = "warning"
        }
        else if (result >= 30){
            status = "obesitas"
            type= "dark"
        }

        //masukkan kedalam state
        this.setState({
            hasil: result,
            status: status,
            type : type
        })
    }

    render(){
        return(
            <div className="App container col-sm-4">
                <div className="card-header bg-primary">
                    <h3>Body Mass Index</h3>
                </div>
                <hr/>
                <div className="card body">
                    Input berat
                    <input type="number" className="form control"
                    value={this.state.berat}
                    onChange={ ev => this.setState({berat: ev.target.value})}
                     />
                     {/**ev.target.value = untuk mendapatkan nilai yang dimaksud oleh user ke input tersebut */}

                    Input tinggi
                    <input type="number" className="form control"
                    value={this.state.tinggi}
                    onChange={ ev => this.setState({tinggi: ev.target.value})}
                    /> 
                    <hr/>

                    <button className="btn btn-primary btn-block mb-1"
                    onClick={() => this.HitungBMI()}>
                        Hitung BMI
                    </button>

                    Nilai BMI
                    <input type="number" className="form control"
                    value={this.state.hasil} readOnly
                    />  

                    Status BMI
                    <Alert message={this.state.status} type={this.state.type} />

                </div>

            </div>
        )
    }
}
export default BMI;