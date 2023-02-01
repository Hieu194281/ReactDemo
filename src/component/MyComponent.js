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
        this.setState({
            name: 'Eric', // truyen vao bien object cap nhat st  ate moi
            age: Math.floor(Math.random() * 100 + 1)
        })
    }

    handleonMouseOver(event) {
        // console.log(event.pageX)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}, my age is{this.state.age}
                <button onMouseOver={this.handleonMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div >
        )
    }
}

export default MyComponent;
