import React, { useEffect, useState } from "react";

function DetailSection({ data }) {
  const rows = data.map((item, index) => {
    return (
      <div key={index} className={`text-center text-lg p-1`}>
        <div>{item.value}</div>
      </div>
    );
  });

  return <>{rows}</>;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function CompareTable({ bikes }) {
  if(!bikes) return <></>;

  const [bikeRecords, setBikeRecords] = useState();

  const sectionHeaderStyle = "p-1 lg:p-3 font-['Open_Sans'] bg-bg-orange text-white text-sm lg:text-md font-semibold col-span-1";

  const dataStyle = "text-sm lg:text-md border-b-2 border-gray-600 p-1  col-span-2";

  const [mobileColumns, desktopColumns] = {
    0: [3, 3], // 0 bike
    1: [3, 3], // 1 bike
    2: [5, 5], // 2 bikes
    3: [5, 7], // 3 bikes
  }[bikes.length % 4];

  useEffect(() => {
    // console.log("Bikes", bikes);

    const records = bikes.map((bike) => {
      var b = bike.bikeData;

      const dataImage = [{ value: b.images.image_url ? b.images.image_url : "-"}];

      const dataBasic = [
        {value: b.bike_manufacturer.maker_name ? b.bike_manufacturer.maker_name : "-"},
        {value: Number(b.fixed_price).toLocaleString("en-IN")},
      ];

      const dataAuthor = [{ value: b.author ? b.author : "-"}];

      const dataBodyType = [{ value: b.bike_body_type?.body_name ? b.bike_body_type.body_name : "-"}];

      const dataBikeColor = [{ value: b.bike_color.bike_color ? b.bike_color.bike_color : "-"}];

      const dataBikeType = [{ value: b.bike_type.type_name ? b.bike_type.type_name : "-"}];

      const dataBikeYear = [{ value: b.bike_year ? b.bike_year : "-"}];

      const dataFrontBreak = [{ value: b.front_brake?.front_break ? b.front_brake.front_break : "-"}];

      const dataFrontSuspension = [{ value: b.front_suspension?.front_suspension ? b.front_suspension.front_suspension : "-"}];

      const dataGear = [{ value: b.gear.gear ? b.gear.gear : "-"}];

      const dataModelName = [{ value: b.model_name ? b.model_name.model_name : "-"}];

      const dataMileage = [{ value: b.mileage ? numberWithCommas(b.mileage): "-"}];

      const dataRearBrake = [{ value: b.rear_brake?.rear_brake ? b.rear_brake.rear_brake : "-"}];

      return {
        dataImage,
        dataBasic,
        dataAuthor,
        dataBodyType,
        dataBikeColor,
        dataBikeType,
        dataBikeYear,
        dataFrontBreak,
        dataFrontSuspension,
        dataGear,
        dataModelName,
        dataMileage,
        dataRearBrake
      };
    });

    setBikeRecords(records);
  },[bikes])

  // console.log(bikeRecords);

  if(!bikeRecords || bikeRecords.length === 0){
    return (
      <div>
        <b>
          Choose any bikes from our collections in the page. Then click on compare. It will redirect to the the compare
          page. A user can compare up to 3 bikes at a time. For small devices a user can comopare upto two bikes at a
          time.
        </b>
      </div>
    );
  }  else {

    // console.log(bikeRecords);
    // console.log(bikeRecords[0].dataImage[0].value);

    const bikeImage = bikeRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} col-span-2 p-1 pb-3`}>
            <img
              className={` ${index < 1 ? "hidden lg:block" : ""}  lg:h-[250px] sm:h-[150px]  rounded-lg`}
              src={record.dataImage[0].value}
              alt="bike"
            />
        </div>
      )
    });

    const basicInformationColumns = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataBasic} />
        </div>
      )
    });

    const basicbikeAuthor = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataAuthor} />
        </div>
      )
    });

    const basicbikebodyType = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataBodyType} />
        </div>
      )
    });

    const basicbikeColor = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataBikeColor} />
        </div>
      )
    });

    const basicbikeType = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataBikeType} />
        </div>
      )
    });

    // dataBikeYear
    const basicbikeYear = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataBikeYear} />
        </div>
      )
    });

    // dataFrontBreak
    const basicbikeFront = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataFrontBreak} />
        </div>
      )
    });

    // dataFrontSuspension
    const basicbikeSuspension = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataFrontSuspension} />
        </div>
      )
    });

    // dataGear
    const basicbikeGear = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataGear} />
        </div>
      )
    });

    // dataModelName
    const basicBikeModel = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataModelName} />
        </div>
      )
    });

    // dataMileage
    const basicBikeMileage = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataMileage} />
        </div>
      )
    });

    // dataRearBrake
    const basicBikeRearBrake = bikeRecords.map((record,index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataRearBrake} />
        </div>
      )
    });


    return (
      <div className={`grid grid-cols-${mobileColumns} lg:grid-cols-${desktopColumns} w-full `}>
        <div className=""></div>
        {bikeImage}

        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Basic Information</h4>
          <h4 className="lg:hidden block">Basic Info</h4>
        </div>
        {basicInformationColumns}

        {/* basicBikeModel */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Model</h4>
          <h4 className="lg:hidden block">Model</h4>
        </div>
        {basicBikeModel}


        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Seller Name</h4>
          <h4 className="lg:hidden block">Seller</h4>
        </div>
        {basicbikeAuthor}

        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Body Type</h4>
          <h4 className="lg:hidden block">Body Type</h4>
        </div>
        {basicbikebodyType}
        
        {/* basicBikeMileage */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Mileage</h4>
          <h4 className="lg:hidden block">Mileage</h4>
        </div>
        {basicBikeMileage}


        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Bike Color</h4>
          <h4 className="lg:hidden block">Bike Color</h4>
        </div>
        {basicbikeColor}

        {/* basicbikeType */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Bike Type</h4>
          <h4 className="lg:hidden block">Bike Type</h4>
        </div>
        {basicbikeType}

        {/* basicbikeyear */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Year</h4>
          <h4 className="lg:hidden block">Year</h4>
        </div>
        {basicbikeYear}

        {/* basicbikeFront */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Front Break</h4>
          <h4 className="lg:hidden block">Break</h4>
        </div>
        {basicbikeFront}

        {/* dataFrontSuspension */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Suspension</h4>
          <h4 className="lg:hidden block">Suspension</h4>
        </div>
        {basicbikeSuspension}

        {/* basicbikeGear */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Gear</h4>
          <h4 className="lg:hidden block">Gear</h4>
        </div>
        {basicbikeGear}

        {/* basicBikeRearBrake */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Rear Brake</h4>
          <h4 className="lg:hidden block">Rear</h4>
        </div>
        {basicBikeRearBrake}

      </div>
    )

  }
}


export default CompareTable;