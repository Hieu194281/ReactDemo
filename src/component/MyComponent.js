// class component 
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "HaryPham",
        address: "Hoidantaodi",
        age: 26
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}, my address is {this.state.address}
            </div>
        )
    }
}

export default MyComponent;
