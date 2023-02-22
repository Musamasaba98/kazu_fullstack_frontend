import React from "react";
import { useSelector } from "react-redux";
import MyListCard from "../Components/MyListCard";

const MyList = () => {
  const { itemList } = useSelector((state) => state.myList);
  console.log(itemList);
  return (
    <div className="flex flex-col w-4/5 mx-auto">
      <h3 className="text-white font-bold text-2xl">My List</h3>
      <div
        className="w-full h-full md:pt-10 mx-auto flex-column"
        style={{ minHeight: "90vh" }}
      >
        {itemList.map((item) => {
          return <MyListCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MyList;
