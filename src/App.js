import React from "react";
import './App.css';
import Box from "./components/Box";
import "./Styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;
export class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      water : 1.5,
      heart : 120,
      temperature : -10,
      steps : 3000,
    }
    
  }
  onHeartChange(event) {
    
    this.setState({
      heart: event.target.value
    });
  }
  onStepsChange(event) {
    this.setState({
      steps: event.target.value
    })
  }
  onTemperatureChange(event){
    if(this.state.temperature > 20){
      this.state.water = this.state.water + 0.02;
    }
    this.setState({
      
      temperature: event.target.value
    })
  }

  calculateWater() {
    this.setState({
      water: this.state.water
    })
  }
  render() {
    return (
      <div className= "container-fluid">
        <div className="row">
          <Box icon ={"local_drink"} 
               color= {"#3A85FF"} 
               value = {this.state.water} 
               unit = {"L"}/>
          <Box icon ={"directions_walk"} 
               color= {"black"} 
               value = {this.state.steps} 
               unit = {"Steps"}
               min={stepsMin}
               max={stepsMax}
               onChange={this.onStepsChange.bind(this)}/>
          <Box icon ={"favorite"} 
               color= {"red"} 
               value = {this.state.heart} 
               unit = {"bpm"}
               min = {heartMin}
               max = {heartMax}
               onChange = {this.onHeartChange.bind(this)}
               />
          <Box icon ={"wb_sunny"} 
               color= {"yellow"} 
               value = {this.state.temperature} 
               unit = {"°C"}
               min={tempMin}
               max={tempMax}
               onChange={this.onTemperatureChange.bind(this)}/>
          <p>Heart: {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
          
        </div>
        
      </div>
    );
  }
}

export default App;
