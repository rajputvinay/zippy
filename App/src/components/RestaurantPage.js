import React, { useEffect, useState } from "react";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantMenuItem from "./RestaurantMenuList";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resDetails, setResDetails] = useState([]);
  const [resMenuCard, setResMenuCard] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    GetRestaurantMenu();
  }, []);
  async function GetRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.904684&lng=75.827782&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();

    setResDetails(json.data?.cards[0]?.card?.card);
    setResMenuCard(
      json.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.slice(1, -1)
    );
    console.log(resMenuCard);
  }
  return (
    <>
      <RestaurantDetails menu={resDetails} />
      <RestaurantMenuItem menu={resMenuCard} />
    </>
  );
};

export default RestaurantMenu;
