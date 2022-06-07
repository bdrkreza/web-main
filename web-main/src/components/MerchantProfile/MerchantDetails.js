import React from 'react';

function MerchantDetails(props) {
  // console.log("PROPS in details page =>", props.message);

  // function getWordCount(str){
  //   return str.split(' ')
  //     .filter(function(n) { return n != '' })
  //     .length
  // }

  // let counting_words = getWordCount(props?.message);
  // console.log("In Details page =>", getWordCount(props?.message));
  return (
    <div className="p-4 mt-16">

        {/* {"" + props.message ?  <ReactReadMoreReadLess
            charLimit={300}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
        >
                {props.message}
        </ReactReadMoreReadLess> : <p>No data about the merchant</p>} */}
        
        <p className="font-bold text-2xl pb-2">About Us</p>

        {"" + props.message ?  
               <p>{props.message}</p>  : <p>No data about the merchant</p>}

    </div>
  )
}

export default MerchantDetails