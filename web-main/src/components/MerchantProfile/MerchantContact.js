import React from 'react';

function MerchantContact(props) {
    // console.log("Props in merhcant contact=>", props);
  return (
    <div className="p-4 border bg-gray-100">
        <div className="bg-white p-20 flex flex-col justify-items-center items-center border rounded">
            <p className="text-center">{props.name}</p>
            <p className="text-center mt-2">{props.address}</p>

            <div className="mt-2 flex flex-col items-center">
                {/* <button className="mt-3 min-w-full text-bg-orange hover:text-white  hover:bg-bg-orange font-bold py-2 px-10 border rounded border-bg-orange">
                    Send Email
                </button>
                <button className="mt-3 min-w-full text-bg-orange hover:text-white  hover:bg-bg-orange font-bold py-2 px-10 border rounded border-bg-orange">
                    Call Us
                </button>
                <button className="mt-3 min-w-full text-bg-orange hover:text-white  hover:bg-bg-orange font-bold py-2 px-10 border rounded border-bg-orange">
                    Message
                </button> */}
                <a className="w-64 h-12 px-20 py-2 m-2 font-bold text-bg-orange hover:text-white transition-colors duration-150 border-4 rounded border-bg-orange focus:shadow-outline hover:bg-bg-orange"
                   href={`mailto:${props.email}`}>
                    Send Email
                </a>
                <a className="w-64 h-12 py-2 m-2 font-bold text-center text-green hover:text-white transition-colors duration-150 border-4 rounded border-green focus:shadow-outline hover:bg-green"
                href={`tel:${props.number}`}>
                    Call Us
                </a>
                <a className="w-64 h-12 px-20 py-2 m-2 font-bold text-indigo-700 hover:text-white transition-colors duration-150 border-4 rounded border-indigo-700 focus:shadow-outline hover:bg-indigo-700"
                href={`tel:${props.number}`}>
                    Message
                </a>
            </div>
        </div>
    </div>
  )
}
// w-64 h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800
export default MerchantContact