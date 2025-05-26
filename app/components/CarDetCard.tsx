import React from "react";

const CarDetCard = ({ details, title }) => {
  return (
    <div className="w-fit shadow-100 rounded-[10px] border-black px-5 py-2 h-fit">
      <div className="flex gap-3 pb-2">
        <h2>{title}: </h2>
        <h5 className="self-end pb-1">{details.name}</h5>
      </div>
      <div>
        {Object.entries(details).map(
          ([key, value]) =>
            key !== "name" && (
              <div key={key} className="flex gap-4">
                <div className="border-black w-[150px]"><h4>{key}</h4></div>
                <div className="w-[170px]"><h4>{value}</h4></div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CarDetCard;
