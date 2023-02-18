import React from "react";

class DisplayInfo extends React.Component {
    render() {
        // desctructuring array
        const { listUsers } = this.props
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfo