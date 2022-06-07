import React from 'react';
import CarCardForRecentlyAdded from "../CarDetails/CarCardForRecentlyAdded";

function MerchantRecentlyAdded(props) {
    // console.log("Props =>", props);
    return (
        <div className="mt-4 border p-4 bg-gray-100">
            <p className="font-bold">Recently Added Cars</p>

            {props.car.length === 0 && <h1>No car data</h1>}
            <div className="">
                {props.car
                    .filter((item, index) => index < 4)
                    .map((d, idx) => (
                        <CarCardForRecentlyAdded
                        key={idx}
                        car={d}
                        pathName={"merchant-recently-added"}
                    />
                ))}
            </div>
        </div>
    )
}

export default MerchantRecentlyAdded