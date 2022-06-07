import React from "react";

function MerchantCoverphoto(props) {
  // console.log("MerchantCoverphoto.Props =>", props);
  // console.log("backdrop =>", props.backdrop);
  return (
    <>
      <div className="lg: mt-28 lg:mt-52 w-full">
        <div className="border-bg-orange  flex items-center justify-center">
          {
            props.backdrop ?
              <div className="w-full relative flex items-center justify-center">
                <img src={props.backdrop} alt="Merchant" className=" h-72 lg:h-96 w-full " />
                <div className="border-8 absolute border-white rounded-full bg-gray-500  overflow-hidden mt-64 lg:mt-96 w-48 h-48  lg:w-52 lg:h-52">
                  <img src={props.image} className="w-52 h-52  rounded-full" alt="Merchant Profile" />
                </div>
              </div>



              : <div className="p-5 border w-full 
            border-bg-orange  bg-gradient-to-r from-bg-orange to-#fff mt-2  lg:mt-2 relative flex items-center justify-center flex-col">
                <p className="p-20 flex justify-center align-center text-white text-4xl font-bold">{props.name}</p>
                <div className="border-8 absolute border-white rounded-full bg-bg-orange  overflow-hidden mt-64 lg:mt-72 w-40 h-40  lg:w-50 lg:h-50">
                  <img src={props.image} className="w-40 h-40 rounded-full" alt="Merchant Profile" />
                </div>
              </div>
          }
        </div>

      </div>
      {/* <div className="flex justify-center border">
            <div className="w-40 h-40 bg-bg-orange rounded-full">
                <img src="assets/add-picture.svg" alt="Merchant Profile"/>
            </div>
        </div> */}
    </>
  );
}

export default MerchantCoverphoto;
