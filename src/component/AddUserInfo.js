import React, { useState } from "react";

const AddUserInfo = (props) => {

    const [name, setName] = useState('Hieuu Pham')
    const [age, setAge] = useState(26)

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + 'random',
            name: name,
            age: age
        })
    }

    return (
        <div>
            <div>My name is {name} and my age is {age}</div>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <label>Yourname</label>
                <input value={name} type="text" onChange={(event) => handleOnChangeInput(event)}></input>

                <label>Yourage</label>
                <input value={age} type="text" onChange={(event) => handleOnChangeAge(event)}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo