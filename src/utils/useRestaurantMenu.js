import { useEffect,useState } from "react";
import { MENU_API } from "./constants";
import { useParams } from "react-router-dom";
const useRestaurantMenu =() =>{
    const [resInfo,setResInfo] =useState(null);
const {resId} =useParams();
    // write a logic for fetch data from api or SRP
    useEffect(() => {
        fetchData();
    },[]);
const fetchData =  async () => {
    const data=await fetch(MENU_API+resId);
    const response=await data.json();
    
    setResInfo(response.data);
}


    return resInfo;
}
export default useRestaurantMenu