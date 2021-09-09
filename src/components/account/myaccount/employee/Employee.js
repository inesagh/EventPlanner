import React from 'react';
import EachOccupation from './eachoccupation/EachOccuptaion';
import './employee.css';

const Employee = () => {
    const occupation = ["Florist", "Photographer/Videographer", "DJ", "Hairstylist", "Makeup artist", "Cake Baker", "Buffet", "Decorator"];
    return (
        <div id="employees">
            <h1>Employees</h1>
            {
                occupation.map((each, index) => {
                    if(index % 2 == 1){
                        return <EachOccupation occupation = {each} rightOrNot = {true}/>
                    }else{
                        return <EachOccupation occupation = {each} rightOrNot = {false}/>
                    }
                })
            }
        </div>
    )
}

export default Employee
