import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCards } from "../store/SearchSlice";
import { Link } from "react-router-dom";

const Body = () => {
  const SearchedCards = useSelector((store) => store.search.RestaurantCards);
  const Dispatch = useDispatch();
  useEffect(() => {
    GetDataApi();
  }, []);
  async function GetDataApi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.904684&lng=75.827782&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const result = json.data?.cards[2].data.data.cards;
    console.log(result);
    Dispatch(updateCards(result));
    console.log(SearchedCards);
  }

  return (
    <>
      <div className="flex flex-wrap">
        {SearchedCards.map((items, idx) => {
          return (
            <Link to={`/resId/${items.data.sla.restaurantId}`} key={idx}>
              <div className="border border-white w-[250px] p-1 m-1 hover:shadow-lg my-3 mx-8">
                <img
                  className="w-[254px]"
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${items.data.cloudinaryImageId}`}
                />
                <p className="font-medium text-lg">{items.data.name}</p>
                <div className="text-[#686b78] text-sm break-words mt-4 ">
                  {items.data.cuisines.join().split(" ,")}
                </div>

                <div className="flex justify-between items-center mt-[14px] ">
                  <p>⭐{items.data.avgRating}</p>
                  <p>{items.data.deliveryTime} mins</p>
                  <p>{items.data.costForTwoString}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
