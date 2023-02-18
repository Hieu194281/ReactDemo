// class component 
// function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";
import logo from "../logo.svg"

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Hoi dan IT', age: 30 },
            { id: 2, name: 'Hoi Hieu IT', age: 10 },
            { id: 3, name: 'Hieu IT', age: 24 }
        ]
    }

    handleAddUser = (UserObj) => {
        this.setState({
            listUsers: [UserObj, ...this.state.listUsers]
        })
    }

    //JSX
    render() {
        return (
            <div>

                <AddUserInfo handleAddUser={this.handleAddUser}></AddUserInfo>
                <br></br>
                <br></br>
                <DisplayInfo
                    listUsers={this.state.listUsers}
                ></DisplayInfo>
            </div>
        )
    }
}

export default MyComponent;
