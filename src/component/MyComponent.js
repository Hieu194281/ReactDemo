// class component 
// function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {


    //JSX
    render() {
        const myInfo = ['abc', 'adsaca']
        return (
            <div>
                <UserInfo></UserInfo>
                <br></br>
                <br></br>
                <DisplayInfo name='Hoi dan IT' age='30'></DisplayInfo>
                <hr></hr>
                <DisplayInfo name='Hoi Hieu IT' age={6} myInfo={myInfo}></DisplayInfo>

            </div>
        )
    }
}

export default MyComponent;
