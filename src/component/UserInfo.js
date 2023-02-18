import React from "react";

class UserInfo extends React.Component {

    state = {
        name: "HaryPham",
        address: "Hoidantaodi",
        age: 26
    }



    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleonMouseOver(event) {
        // console.log(event.pageX)
    }

    handleSubmit(event) {
        event.preventDefault() // Khong load lai trang khi nhan submit
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <div>My name is {this.state.name} and my age is {this.state.age}</div>
                <form onSubmit={(event) => { this.handleSubmit(event) }}>
                    <label>Yourname</label>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeInput(event)}></input>

                    <label>Yourage</label>
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        )

    }
}

export default UserInfo