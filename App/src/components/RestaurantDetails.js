import React from "react";

const RestaurantDetails = ({ menu }) => {
  if (!menu) return null;
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-black capitalize">
        {menu.info?.name}
      </h2>
      <div className="flex">
        {menu.info?.cuisines?.map((item, idx) => {
          return (
            <p
              className="text-[.93rem] text-[#7e809c]  whitespace-nowrap "
              key={idx}
            >
              {item},
            </p>
          );
        })}
      </div>
      <div className="flex justify-between">
        <div className="flex mb-1 ">
          <p className="mr-2 text-[.93rem] text-[#7e809c]  ">
            {menu.info?.areaName}{" "}
          </p>
          <p className="text-[.93rem] text-[#7e809c] ">
            {menu.info?.sla.lastMileTravel} km
          </p>
        </div>
        <div className="mr-5 shadow-xl p-2 mb-2 rounded-lg">
          <p>⭐{menu.info?.avgRating}</p>
          <div className="border"></div>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
