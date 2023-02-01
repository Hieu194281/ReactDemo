// class component 
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "HaryPham",
        address: "Hoidantaodi",
        age: 26
    }

    handleClick(event) {
        // console.log(">> click me")
        console.log("My name is " + this.state.name)
    }

    handleonMouseOver(event) {
        console.log(event.pageX)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}, my address is {this.state.address}
                <button onMouseOver={this.handleonMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div >
        )
    }
}

export default MyComponent;
