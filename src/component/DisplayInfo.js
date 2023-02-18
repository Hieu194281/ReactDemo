import React from "react";

class DisplayInfo extends React.Component {
    render() {
        console.log(this.props)
        // desctructuring array
        const { age, name } = this.props
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}

export default DisplayInfo