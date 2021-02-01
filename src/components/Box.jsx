import React from "react";

class Box extends React.Component {
render() {
    const {color, icon, value, unit} = this.props;
    if(icon === "local_drink"){
        return(
            <div className = "box col-sm-3 col-6">
            <span class="material-icons"
                  style= {{fontSize: 100, color: color}}>
                  {icon}
            </span>
            
            <p>{value} {unit}</p>
           
        </div>
        )
    }
    return(
        <div className = "box col-sm-3 col-6">
            <span class="material-icons"
                  style= {{fontSize: 100, color: color}}>
                  {icon}
            </span>
            
            <p>{value} {unit}</p>
            <input type = "range" 
                   min = {this.props.min} 
                   max = {this.props.max} 
                   value = {this.props.value} 
                   onInput = {this.props.onChange}></input>
        </div>
    )
}
}
export default Box;