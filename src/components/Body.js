import React, { useEffect, useState } from "react";
import Shimmer from "./Simmer";
import Restuarant from "./Restuarant";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const Body = () => {
  //Local State variable Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtredRestuarant, setFiltredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Whenever state varables updates,react triggers a reconciltion cycle(rerenders the component)
  useEffect(() => {
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const handleAddItem = (resp) => {
    //Dispatch an action
    dispatch(addItem(resp));
  };
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    //Optional Chain
    setListOfRestaurants(json?.products);
    setFiltredRestuarant(json?.products);
    console.log("Json", json);
  };

  const onlineStatus = UseOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className="px-3 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              let filteredResturant = listOfRestaurants.filter((res) =>
                res.brand.toLowerCase().includes(searchText.toLowerCase())
              );
              setFiltredRestuarant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              let filteredList = listOfRestaurants.filter(
                (item) => item.rating > 4.51
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Products
          </button>
          <input className="border border-black m-4" />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filtredRestuarant?.map((resp) => {
          return (
            <div>
              <Link key={resp.id} to={"/resturantsmenu/" + resp.id}>
                <Restuarant key={resp.id} resData={resp} />
              </Link>
              <div className="absolute">
                <button
                  className="p-2 bg-black text-white shadow-lg  mx-16 rounded-md"
                  onClick={() => handleAddItem(resp)}
                >
                  Add+
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
