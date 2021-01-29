import React from 'react'
import './App.css';
import BMI from './rpp2/BMI'
import Bank from './rpp2/Bank'
import PPN from './rpp2/PPN'
import Biner from './rpp2/Biner'
import Desimal from './rpp2/Desimal'
import Heksadesimal from './rpp2/Hexadesimal'
import Oktal from './rpp2/Oktal'
import Navbar from './Component/Navbar'
import {Switch, Route} from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Navbar/>
        </div>
        <div>
          <Switch>
            <Route exact path="/bmi" component={BMI}/>
            <Route path="/bank" component={Bank}/>
            <Route path="/ppn" component={PPN}/>
            <Route path="/biner" component={Biner}/>
            <Route path="/desimal" component={Desimal}/>
            <Route path="/heksadesimal" component={Heksadesimal}/>
            <Route path="/oktal" component={Oktal}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
