// class component 
// function component

import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";


// class MyComponent extends React.Component {

//     state = {
//         listUsers: 
//     }

//     handleAddUser = (UserObj) => {
//         this.setState({
//             listUsers: [UserObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userID) => {
//         let UserClone = [...this.state.listUsers]
//         UserClone = UserClone.filter(item => item.id != userID)
//         this.setState({
//             listUsers: UserClone
//         })
//     }

//     //JSX
//     render() {
//         return (

//             <div className="a">
//                 <AddUserInfo handleAddUser={this.handleAddUser}></AddUserInfo>
//                 <br></br>
//                 <br></br>
//                 <DisplayInfo
//                     handleDeleteUser={this.handleDeleteUser}
//                     listUsers={this.state.listUsers}
//                 ></DisplayInfo>
//             </div>

//         )
//     }
// }

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Hoi dan IT', age: 30 },
        { id: 2, name: 'Hoi Hieu IT', age: 10 },
        { id: 3, name: 'Hieu IT', age: 24 }
    ])

    const handleAddUser = (UserObj) => {
        setListUsers([UserObj, ...listUsers])
    }

    const handleDeleteUser = (UserID) => {
        let userClone = [...listUsers]
        userClone = userClone.filter(item => item.id !== UserID)
        setListUsers(userClone)
    }

    return (
        <div>
            <AddUserInfo handleAddUser={handleAddUser}></AddUserInfo>
            <br></br>
            <br></br>
            <DisplayInfo
                handleDeleteUser={handleDeleteUser}
                listUsers={listUsers}
            ></DisplayInfo>
        </div >
    )

}



export default MyComponent;
