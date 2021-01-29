import React from "react";

class Box extends React.Component {
render() {
    const {color, icon, value, unit} = this.props;
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
}
export default Box;