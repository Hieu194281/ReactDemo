import React from "react";
import './DisplayInfo.scss'
import logo from "../logo.svg"
// class DisplayInfo extends React.Component {
//     render() {
//         console.log("c>> call me render")
//         // desctructuring array
//         const { listUsers } = this.props
//         // console.log(listUsers)
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age < 18 ? 'red' : 'green'}>
//                                     <div>My name is {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                     <div>
//                                         <button onClick={(event) => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr></hr>
//                                 </div>
//                             )
//                         })}
//                     </>}

//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {

    const { listUsers } = props // object => bo tu khoa this
    return (
        <div className="display-infor-container">
            {true &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={user.age < 18 ? 'red' : 'green'}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <div>
                                    <button onClick={(event) => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })}
                </>}

        </div>
    )
}
export default DisplayInfo