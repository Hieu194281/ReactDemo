// class component 
// function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Hoi dan IT', age: 30 },
            { id: 2, name: 'Hoi Hieu IT', age: 10 },
            { id: 3, name: 'Hieu IT', age: 20 }
        ]
    }

    //JSX
    render() {
        return (
            <div>
                <UserInfo></UserInfo>
                <br></br>
                <br></br>
                <DisplayInfo listUsers={this.state.listUsers} ></DisplayInfo>
            </div>
        )
    }
}

export default MyComponent;
