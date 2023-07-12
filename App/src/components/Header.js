import React, { useState } from "react";
import { FilterData } from "./helper";
import { useDispatch, useSelector } from "react-redux";
import { updateCards } from "../store/SearchSlice";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
const Header = () => {
  const DISPTACH = useDispatch();
  const SearchedCards = useSelector((store) => store.search.RestaurantCards);
  const CartItems = useSelector((store) => store.cart.CartItems);
  const [searchVal, SetSearchVal] = useState("");
  return (
    <React.Fragment>
      <div className="flex justify-between shadow-md   w-full bg-orange-50">
        <Link to="/">
          <img
            className=" w-24"
            // src="https://freesvg.org/img/chef-restaurant-logo-publicdomainvectors.png"
            src={logo}
          />
        </Link>
        <div className="flex items-center">
          <input
            type="search"
            value={searchVal}
            onChange={(e) => {
              SetSearchVal(e.target.value);
            }}
            className="w-[450px] rounded-l-full border bg-white border-black p-2"
          />

          <span
            className=" border bg-white border-black p-2 rounded-r-full cursor-pointer "
            onClick={() => {
              const FilteredList = FilterData(SearchedCards, searchVal);
              DISPTACH(updateCards(FilteredList));
            }}
          >
            🔍
          </span>
        </div>
        <div className="cursor-pointer">
          <ul className="flex   p-4  mr-2 ">
            <Link to="register">
              <li className="m-2">SIGN IN</li>
            </Link>
            <Link to="contact">
              <li className="m-2">CONTACT</li>
            </Link>
            <Link to="cart">
              <li className="m-2">CART ({CartItems.length})</li>
            </Link>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
