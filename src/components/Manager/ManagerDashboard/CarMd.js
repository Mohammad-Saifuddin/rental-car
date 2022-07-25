import React from "react";


const CarMd = () => {
    
        return (
            <div className="CarMdHeading">
                    <h2>CAR</h2>
            <div className="CarMd">
                <div className="CreateCar">
                    <button className="CreateCarB" type="submit">Create Car</button>
                </div>
                <div className="UpdateCar">
                    <button className="UpdateCarB" type="submit">Update Car</button>
                </div>
                <div className="DeleteCar">
                    <button className="DeleteCarB" type="submit">Delete Car</button>
                </div>
            </div>
            </div>
        );
    
}

export default CarMd;