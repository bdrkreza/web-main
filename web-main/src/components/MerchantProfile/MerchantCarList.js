import React from 'react';
import CarCardForDetails from "../../components/CarCard/CarCardForDetails";

function MerchantCarList(props) {
    // console.log("User uploaded Cars",props.car)
  return (
    <div className="p-4">
        <p className="text-bg-orange font-bold text-2xl pb-2">Merchant Car List</p>

        {props.car.length === 0 && <p className="font-bold text-xl">No data</p>}
        
        <div className='flex flex-wrap -ml-[15px]'>
            {
                props.car.map((d, idx) => (
                <CarCardForDetails key={idx} car={d}/>
            ))
            } 
        </div>
        
    </div>
  )
}

export default MerchantCarList