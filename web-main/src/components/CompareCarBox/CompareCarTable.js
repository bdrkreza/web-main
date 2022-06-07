import React, { useEffect, useState } from "react";
import styled from "styled-components";

/**
 * Show details of 2-3 cars in sections
 * @param {*} param0
 * @returns
 */
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

export function CompareTable({ cars }) {
  if (!cars) return <></>;

  const [carRecords, setCarRecords] = useState();
  // const sectionHeaderStyle = "p-3 font-['Open_Sans'] text-xl font-semibold bg-gray-400 col-span-2 lg:col-span-3";
  const sectionHeaderStyle =
    "p-1 lg:p-3 font-['Open_Sans'] bg-bg-orange text-white text-sm lg:text-md font-semibold col-span-1";
  // const sectionDataStyle = "w-full grid grid-cols-3 ";
  const dataStyle = "text-sm lg:text-md border-b-2 border-gray-600 p-1  col-span-2";
  // console.log({ cars });
  // const mobileColumns = cars.length * 2 + 1;
  // const desktopColumns = cars.length * 2 + 1;

  // cars.length must be between 1-3
  // const [mobileColumns, desktopColumns] = {
  //   0: [3, 3], // 0 car
  //   1: [3, 3], // 1 car
  //   2: [5, 5], // 2 cars
  //   3: [5, 7], // 3 cars
  // }[cars.length % 4];

  const [mobileColumns, setMobileColumns] = useState(3);
  const [desktopColumns, setDesktopColumns] = useState(3);

  useEffect(() => {
    // console.debug("CompareTable", cars);
    const [m, d] = {
      0: [3, 3], // 0 car
      1: [3, 3], // 1 car
      2: [5, 5], // 2 cars
      3: [5, 7], // 3 cars
    }[cars.length % 4];

    setMobileColumns(m);
    setDesktopColumns(d);

    const records = cars.map((car) => {
      var c = car.carData;

      const dataImage = [{ value: c.images.image_url ? c.images.image_url : "-" }];

      const dataBasic = [
        { value: c.car_manufacturer.maker_name + " " + c.model_name.model_name },
        { value: Number(c.fixed_price).toLocaleString("en-IN") },
      ];

      const mileage = [{ value: c.mileage ? numberWithCommas(c.mileage) : "-" }];

      const dataEngine = [{ value: c.car_engine ? c.car_engine : "-" }];

      const dataFuel = [{ value: c.car_fuel.fuel_type ? c.car_fuel.fuel_type : "-" }];

      const dataTransmission = [{ value: c.transmission_type ? c.transmission_type : "-" }];

      const dataCondition = [{ value: c.car_type.type_name ? c.car_type.type_name : "-" }];

      const dataBodyType = [{ value: c.car_body_type.body_name ? c.car_body_type.body_name : "-" }];

      const dataCountry = [{ value: c.car_manufacturer.maker_country ? c.car_manufacturer.maker_country : "-" }];

      const dataPackage = [{ value: c.grade ? c.grade : "-" }];

      const dataModelYear = [{ value: c.car_year ? c.car_year : "-" }];

      // , dataFuel, dataTransmission, dataCondition, dataBodyType, dataCountry
      return {
        dataImage,
        mileage,
        dataBasic,
        dataEngine,
        dataFuel,
        dataTransmission,
        dataCondition,
        dataBodyType,
        dataCountry,
        dataPackage,
        dataModelYear,
      };
    });
    // console.log(records[0].dataImage[0]);
    setCarRecords(records);
  }, [cars]);

  // console.log(carRecords);

  if (!carRecords || carRecords.length === 0) {
    return (
      <div>
        <b>
          Choose any cars from our collections in the page. Then click on compare. It will redirect to the the compare
          page. A user can compare up to 3 cars at a time. For small devices a user can comopare upto two cars at a
          time.
        </b>
      </div>
    );
  } else {
    // In MobileView, hide the first car, show the latest two cars.
    // grid grid-cols-1 text-center text-lg p-1  ${index > 1 ? " bg-red" : ""
    // console.log(carRecords);
    const carImage = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} col-span-2 p-1 pb-3`}>
          <a href={`/featured-used-car/car-details/Toyota-Allion?car_id=1960`}>
            <img
              className={` ${
                index < 1 ? "hidden lg:block" : ""
              }  lg:h-[250px] sm:h-[150px] rounded-lg object-cover h-48 w-96 `}
              src={record.dataImage[0].value}
              alt="car"
            />
          </a>
        </div>
      );
    });

    // console.log("Image",carImage);

    const basicInformationColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataBasic} />
        </div>
      );
    });

    const mileageColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.mileage} />
        </div>
      );
    });

    const carPackageColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataPackage} />
        </div>
      );
    });

    const basicEngineColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataEngine} />
        </div>
      );
    });

    const basicFuelColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataFuel} />
        </div>
      );
    });

    const basicTransmissionColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataTransmission} />
        </div>
      );
    });

    const basicConditionColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataCondition} />
        </div>
      );
    });

    const basicBodyColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataBodyType} />
        </div>
      );
    });

    const basicCountryColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataCountry} />
        </div>
      );
    });

    // dataModelYear
    const basicYearColumns = carRecords.map((record, index) => {
      return (
        <div className={`${index < 1 ? "hidden lg:block" : ""} ${dataStyle}`}>
          <DetailSection data={record.dataModelYear} />
        </div>
      );
    });

    return (
      <div className={`grid grid-cols-${mobileColumns} lg:grid-cols-${desktopColumns} w-full `}>
        <div className=""></div>
        {carImage}

        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Basic Information</h4>
          <h4 className="lg:hidden block">Basic Info</h4>
        </div>
        {basicInformationColumns}

        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Car Package</h4>
          <h4 className="lg:hidden block">Package</h4>
        </div>
        {carPackageColumns}

        <div className={sectionHeaderStyle}>
          <h4>Milage</h4>
        </div>
        {mileageColumns}

        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Model Year</h4>
          <h4 className="lg:hidden block">Year</h4>
        </div>
        {basicYearColumns}

        <div className={sectionHeaderStyle}>
          <h4>Engine</h4>
        </div>
        {basicEngineColumns}

        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Transmission</h4>
          <h4 className="lg:hidden block">Trans.</h4>
        </div>
        {basicTransmissionColumns}

        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Fuel and Performance</h4>
          <h4 className="lg:hidden block">Fuel</h4>
        </div>
        {basicFuelColumns}

        {/* dataCondition */}
        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Condition</h4>
          <h4 className="lg:hidden block">Cond.</h4>
        </div>
        {basicConditionColumns}

        {/* dataBodyType */}
        <div className={sectionHeaderStyle}>
          <h4>Body Type</h4>
        </div>
        {basicBodyColumns}

        <div className={sectionHeaderStyle}>
          <h4 className="hidden lg:block">Country of Origin</h4>
          <h4 className="lg:hidden block">Origin</h4>
        </div>
        {basicCountryColumns}
      </div>
    );
  }
}

export default CompareTable;
