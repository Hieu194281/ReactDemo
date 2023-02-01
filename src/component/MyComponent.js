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

    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleonMouseOver(event) {
        // console.log(event.pageX)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}, my age is{this.state.age}
                <form onSubmit={(event) => { this.handleSubmit(event) }}>
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Submit</button>
                </form>
            </div >
        )
    }
}

export default MyComponent;
