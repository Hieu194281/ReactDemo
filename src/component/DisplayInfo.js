import React from "react";
import './DisplayInfo.scss'
import logo from "../logo.svg"
class DisplayInfo extends React.Component {

    state = {
        isShowList: true
    }
    handleShowHide() {
        this.setState({
            isShowList: !this.state.isShowList
        })
    }

    render() {
        // desctructuring array
        const { listUsers } = this.props
        console.log(listUsers)
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowList === true ? "Hide List User" : "Show List User"}
                    </span>
                </div>
                {this.state.isShowList &&
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age < 18 ? 'red' : 'green'}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <div>
                                        <button onClick={(event) => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </>}

            </div>
        )
    }
}

export default DisplayInfo