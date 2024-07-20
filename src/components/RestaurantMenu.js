// import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from '../utils/useRestaurantMenu'
import ResCategory from "./ResCategory";
import { useState } from "react";
// import { set } from "mongoose";

const RestaurantMenu = () => {
   const [showIndex,setShowIndex] = useState(null);
const {resId} = useParams();
console.log(resId);
 const resInfo = useRestaurantMenu(resId);
 
 if(resInfo===null){ return<Shimmer/>}
    // use before destructuring the properties of object
   //  create a state variable for controlled component
  
     
    const {name,cuisines,costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info;
    // const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
    // const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
    // const costForTwoMessage = resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
    const  {itemCards}  = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   //  console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   console.log("item category filtered from api\n",categories);
    // if(resInfo===null){ return<Shimmer/>}
    //error  Cannot destructure property 'name' of '(intermediate value)' as it is undefined.
    return(
   <div className="text-center">
     <h1 className="my-6 text-lg font-bold text-center">{name}</h1>
        <p className="text-2xl font-bold">{cuisines.join(",")} -{costForTwoMessage} </p>
        {/* categories accordians */}
        {categories.map((category,index) => 
      //   controlled component
        <ResCategory key={category?.card?.card.title} data={category?.card?.card}
         showItems={index === showIndex ? true : false}
         setShowIndex={() => setShowIndex(index)}
        />)}
       </div>
);}
export default RestaurantMenu;