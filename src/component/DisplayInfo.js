import React, { useState } from "react";
import './DisplayInfo.scss'
import logo from "../logo.svg"
const DisplayInfo = (props) => {
    const [isShowHideListUser, setShowHideListUser] = useState(true)
    const { listUsers } = props // object => bo tu khoa this

    const handleShowHideListUSer = () => {
        setShowHideListUser(!isShowHideListUser)
        // this.setState({
        //     isShowHideListUser: !
        // })
    }
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUSer()}>{isShowHideListUser == true ? 'Hide List User' : 'Show List User'}</span>
            </div>
            {isShowHideListUser &&
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