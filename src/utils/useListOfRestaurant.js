import { useEffect,useState } from "react"

const useListOfRestaurant = async () =>{
    const [listOfRestaurants,setlistOfRestaurant] =useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    useEffect(() => {
        fetchData();
    },[]);
// fetch will fetch data from the api
       const data = await fetch(Swiggy_Api);
    //    convert these these api data into json format because fetch() takes data into the form of text,HTML,Blob(binary data)
        const json = await data.json();
        
         setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         return listOfRestaurants,filteredRestaurants;
}

export default useListOfRestaurant;