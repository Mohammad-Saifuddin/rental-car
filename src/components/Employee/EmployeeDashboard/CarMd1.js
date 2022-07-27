import React from "react";


const CarMd1 = () => {
    
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
            </div>
                <div className="ViewCar">
                    <button className="ViewCarB" type="submit">View Car</button>
                </div>
            </div>
        );
    
}

export default CarMd1;