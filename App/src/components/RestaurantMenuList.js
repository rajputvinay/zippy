import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEM_IMG } from "../constants/constant";
import { addToCart } from "../store/CartSlice";
import { Link } from "react-router-dom";

const RestaurantMenuItem = ({ menu }) => {
  const Dispatch = useDispatch();
  const LoggedInInfo = useSelector((store) => store.cart.isLoggedIn);
  console.log(LoggedInInfo);
  const CartArray = useSelector((store) => store.cart.CartItems);
  console.log(CartArray);
  // console.log(menu);
  if (!menu) return null;
  return (
    <>
      <div className="p-4">
        {menu.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="flex justify-between">
                <p className="text-center font-bold">{item.card.card.title}</p>
                <div>⬇️</div>
              </div>
              <div className="border border-b-gray-500 mb-2"></div>
              {item.card.card.itemCards?.map((innerItem, idx) => {
                return (
                  <>
                    <div key={idx} className="flex justify-between p-4">
                      <div className="p-2">
                        <div className="flex ">
                          <p className="mr-4 text-lg font-bold ">
                            {innerItem.card.info.isBestseller
                              ? "🤩BEST SELLER"
                              : ""}
                          </p>
                          <p>{innerItem.card.info.isVeg ? "🫑Veg" : "🚫Veg"}</p>
                        </div>
                        <p className="font-medium">
                          {innerItem.card.info.name}{" "}
                        </p>
                        <p className="mb-2 font-normal">
                          {innerItem.card.info.price / 100}Rs{" "}
                        </p>
                        {!LoggedInInfo ? (
                          <Link to="/register">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold p-1 mt-5 rounded ">
                              ADD TO CART
                            </button>
                          </Link>
                        ) : (
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold p-1 mt-5 rounded "
                            onClick={() => Dispatch(addToCart(innerItem))}
                          >
                            ADD TO CART
                          </button>
                        )}
                      </div>
                      {innerItem.card.info.imageId && (
                        <img
                          className=" w-64 rounded-3xl"
                          src={MENU_ITEM_IMG + innerItem.card.info.imageId}
                        />
                      )}
                    </div>

                    <div className="border border-b-gray-200 mb-2"></div>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenuItem;
