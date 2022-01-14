import React from 'react';
interface DataProps{
    name:string,
    phone:string,
    email:string

}

const ThankYou = ({name,phone,email}:DataProps) => {
    return (
        <div>
            <div className="ui container">
                <div className="ui success message">
                    <h1>Thank You for Login ! </h1>
                    <h1>Your Details Filled are:- </h1>
                    <h2>Name: {name}</h2>
                    <h2>Phone: {phone}</h2>
                    <h2>Email: {email}</h2>
                </div>
            </div>
        </div>
    )
}

export default ThankYou
