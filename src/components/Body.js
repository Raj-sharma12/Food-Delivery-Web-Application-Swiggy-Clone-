import {useState,useEffect,useContext } from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Swiggy_Api } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// import resList from "../utils/mockData"



const Body = () => {
    //react super powerful variable - state variable
    // for create=ing a state variable we use useState
const resId = useParams();

    const [listOfRestaurants,setlistOfRestaurant] =useState([]);  
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    const [searchContext,setSearchContent] = useState("");


    // create a restaurantcardpromoted component
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // useEffect hook
    useEffect(() => {
        // fetch the inside our ueEffect these render after component render
        fetchdata();
    },[])
  
    const fetchdata= async () => {
        // thse fetch() method givem by browsers  it is a superpower which a js engine have
        // fetch will fetch data from the api
       const data = await fetch(Swiggy_Api);
    //    convert these these api data into json format because fetch() takes data into the form of text,HTML,Blob(binary data)
        const json = await data.json();
        // console.log(json);
        // console.log(json.res.data.name);
        // setlistOfRestaurant() ;
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        // use optional chaining
         setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       }
      
    //  write a logic for check onlinne status
    const onlinestatus = useOnlineStatus();
    if(onlinestatus === false){
        return <h1>Looks like you're offline! Please check your connection</h1>
    }
    const {setUserName,loggedInUser} = useContext(UserContext);
  
    // function logic for fetch the data

// console.log(listOfRestaurants)

    // normal js variable
    // let listOfRestaurxantsJs = [
    //     {
    //         type: "restaurant",
    //         data: {
    //           type: "F",
    //           id: "74453",
    //           name: "Domino's Pizza",
    //           uuid: "87727dbd-7f2b-4857-9763-359624165845",
    //           city: "21",
    //           area: "Athwa",
    //           totalRatingsString: "1000+ ratings",
    //           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //           cuisines: ["Pizzas"],
    //           tags: [],
    //           costForTwo: 40000,
    //           costForTwoString: "₹400 FOR TWO",
    //           deliveryTime: 45,
    //           minDeliveryTime: 45,
    //           maxDeliveryTime: 45,
    //           slaString: "45 MINS",
    //           lastMileTravel: 0,
    //           slugs: {
    //             restaurant: "dominos-pizza-majura-nondh-test_surat",
    //             city: "surat",
    //           },
    //           cityState: "21",
    //           address:
    //             "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
    //           locality: "Bhatar Road",
    //           parentId: 2456,
    //           unserviceable: false,
    //           veg: true,
    //           select: false,
    //           favorite: false,
    //           tradeCampaignHeaders: [],
    //           aggregatedDiscountInfo: {
    //             header: "FREE DELIVERY",
    //             shortDescriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             descriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             subHeader: "",
    //             headerType: 0,
    //             superFreedel: "",
    //           },
    //           aggregatedDiscountInfoV2: {
    //             header: "",
    //             shortDescriptionList: [
    //               {
    //                 meta: "Free Delivery",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             descriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             subHeader: "",
    //             headerType: 0,
    //             superFreedel: "",
    //           },
    //           chain: [],
    //           feeDetails: {
    //             fees: [],
    //             totalFees: 0,
    //             message: "",
    //             title: "",
    //             amount: "",
    //             icon: "",
    //           },
    //           availability: {
    //             opened: true,
    //             nextOpenMessage: "",
    //             nextCloseMessage: "",
    //           },
    //           longDistanceEnabled: 0,
    //           rainMode: "NONE",
    //           thirdPartyAddress: false,
    //           thirdPartyVendor: "",
    //           adTrackingID: "",
    //           badges: {
    //             imageBased: [],
    //             textBased: [],
    //             textExtendedBadges: [],
    //           },
    //           lastMileTravelString: "2.1 kms",
    //           hasSurge: false,
    //           sla: {
    //             restaurantId: "74453",
    //             deliveryTime: 45,
    //             minDeliveryTime: 45,
    //             maxDeliveryTime: 45,
    //             lastMileTravel: 0,
    //             lastMileDistance: 0,
    //             serviceability: "SERVICEABLE",
    //             rainMode: "NONE",
    //             longDistance: "NOT_LONG_DISTANCE",
    //             preferentialService: false,
    //             iconType: "EMPTY",
    //           },
    //           promoted: false,
    //           avgRating: "3.8",
    //           totalRatings: 1000,
    //           new: false,
    //         },
    //         subtype: "basic",
    //       },
    //       {
    //         type: "restaurant",
    //         data: {
    //           type: "F",
    //           id: "410476",
    //           name: "The Brooklyn Creamery - Healthy Ice Cream",
    //           uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
    //           city: "21",
    //           area: "althan bhatar",
    //           totalRatingsString: "100+ ratings",
    //           cloudinaryImageId: "ldtibwymvzehvmdwl8la",
    //           cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
    //           tags: [],
    //           costForTwo: 20000,
    //           costForTwoString: "₹200 FOR TWO",
    //           deliveryTime: 31,
    //           minDeliveryTime: 30,
    //           maxDeliveryTime: 40,
    //           slaString: "30-40 MINS",
    //           lastMileTravel: 6.300000190734863,
    //           slugs: {
    //             restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
    //             city: "surat",
    //           },
    //           cityState: "21",
    //           address:
    //             "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
    //           locality: "Adajan FC",
    //           parentId: 236673,
    //           unserviceable: true,
    //           veg: true,
    //           select: false,
    //           favorite: false,
    //           tradeCampaignHeaders: [],
    //           aggregatedDiscountInfo: {
    //             header: "FREE DELIVERY",
    //             shortDescriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             descriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
               
    //             subHeader: "",
    //             headerType: 0,
    //             superFreedel: "",
    //           },
    //           aggregatedDiscountInfoV2: {
    //             header: "",
    //             shortDescriptionList: [
    //               {
    //                 meta: "Free Delivery",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             descriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             subHeader: "",
    //             headerType: 0,
    //             superFreedel: "",
    //           },
    //           chain: [],
    //           feeDetails: {
    //             fees: [],
    //             totalFees: 0,
    //             message: "",
    //             title: "",
    //             amount: "",
    //             icon: "",
    //           },
    //           availability: {
    //             opened: true,
    //             nextOpenMessage: "",
    //             nextCloseMessage: "",
    //           },
    //           longDistanceEnabled: 0,
    //           rainMode: "NONE",
    //           thirdPartyAddress: false,
    //           thirdPartyVendor: "",
    //           adTrackingID: "",
    //           badges: {
    //             imageBased: [],
    //             textBased: [],
    //             textExtendedBadges: [],
    //           },
    //           lastMileTravelString: "6.3 kms",
    //           hasSurge: false,
    //           sla: {
    //             restaurantId: "410476",
    //             deliveryTime: 31,
    //             minDeliveryTime: 30,
    //             maxDeliveryTime: 40,
    //             lastMileTravel: 6.300000190734863,
    //             lastMileDistance: 0,
    //             serviceability: "SERVICEABLE_WITH_BANNER",
    //             rainMode: "NONE",
    //             longDistance: "NOT_LONG_DISTANCE",
    //             preferentialService: false,
    //             iconType: "EMPTY",
    //           },
    //           promoted: false,
    //           avgRating: "4.4",
    //           totalRatings: 100,
    //           new: false,
    //         },
    //         subtype: "basic",
    //       },
    //       {
    //         type: "restaurant",
    //         data: {
    //           type: "F",
    //           id: "311443",
    //           name: "Siddhi Icecream & Thick Shake",
    //           uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
    //           city: "21",
    //           area: "Nanpura",
    //           totalRatingsString: "100+ ratings",
    //           cloudinaryImageId: "spd3y5gok3vvwqulgmda",
    //           cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
    //           tags: [],
    //           costForTwo: 20000,
    //           costForTwoString: "₹200 FOR TWO",
    //           deliveryTime: 30,
    //           minDeliveryTime: 25,
    //           maxDeliveryTime: 35,
    //           slaString: "25-35 MINS",
    //           lastMileTravel: 3,
    //           slugs: {
    //             restaurant: "siddhi-icecream-athwa-athwa",
    //             city: "surat",
    //           },
    //           cityState: "21",
    //           address:
    //             "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
    //           locality: "Athwa",
    //           parentId: 387846,
    //           unserviceable: true,
    //           veg: false,
    //           select: false,
    //           favorite: false,
    //           tradeCampaignHeaders: [],
    //           aggregatedDiscountInfo: {
    //             header: "FREE DELIVERY",
    //             shortDescriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             descriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             subHeader: "",
    //             headerType: 0,
    //             superFreedel: "",
    //           },
    //           aggregatedDiscountInfoV2: {
    //             header: "",
    //             shortDescriptionList: [
    //               {
    //                 meta: "Free Delivery",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             descriptionList: [
    //               {
    //                 meta: "FREE DELIVERY",
    //                 discountType: "FREE_DELIVERY",
    //                 operationType: "RESTAURANT",
    //               },
    //             ],
    //             subHeader: "",
    //             headerType: 0,
    //             superFreedel: "",
    //           },
    //           chain: [],
    //           feeDetails: {
    //             fees: [],
    //             totalFees: 0,
    //             message: "",
    //             title: "",
    //             amount: "",
    //             icon: "",
    //           },
    //           availability: {
    //             opened: true,
    //             nextOpenMessage: "",
    //             nextCloseMessage: "",
    //           },
    //           longDistanceEnabled: 0,
    //           rainMode: "NONE",
    //           thirdPartyAddress: false,
    //           thirdPartyVendor: "",
    //           adTrackingID: "",
    //           badges: {
    //             imageBased: [],
    //             textBased: [],
    //             textExtendedBadges: [],
    //           },
    //           lastMileTravelString: "3 kms",
    //           hasSurge: false,
    //           sla: {
    //             restaurantId: "311443",
    //             deliveryTime: 30,
    //             minDeliveryTime: 25,
    //             maxDeliveryTime: 35,
    //             lastMileTravel: 3,
    //             lastMileDistance: 0,
    //             serviceability: "SERVICEABLE_WITH_BANNER",
    //             rainMode: "NONE",
    //             longDistance: "NOT_LONG_DISTANCE",
    //             preferentialService: false,
    //             iconType: "EMPTY",
    //           },
    //           promoted: false,
    //           avgRating: "4.5",
    //           totalRatings: 100,
    //           new: false,
    //         },
    //         subtype: "basic",
    //       },
    // ];
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }
    // whenever my state variable will update react triggerss a re-concilliation algorithm(react will re-render thee coomponent)
    // if(listOfRestaurants.length === 0){ 
    //     return <Shimmer/>}
    
    return listOfRestaurants.length===0?<Shimmer/>: 
    
    (
        
        <div className=''>
            <div className='flex filter'>
                <div className="p-4 m-4"> 
                <input type="text" className="border border-black border-solid " value={searchText} 
                onChange={(e) =>{
                    setSearchText(e.target.value);
                    console.log(searchText);
                    
                }}/>
              
                <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={() => {
                        const filterRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filterRestaurants);
                }}>search</button>
                </div>
               <div className="flex items-start p-4 m-4">
                <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" onClick={() => {
                    // we write a filter logic over array
         const filterRestaurants =listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    // console.log(listOfRestaurants);
                  setFilteredRestaurants(filterRestaurants)
                    // listOfRestaurants = listOfRestaurants.filter((res) => res.data.avgRating > 4);
                    // console.log(listOfRestaurants);
                }}>Top Rated Restaurants⭐</button>
                
            </div>
            <div className="flex items-center p-4 m-4 search">
                <label>UserName : </label>
                <input className="p-2 border border-black " type="text" placeholder="User Name"
                    value={loggedInUser}

                onChange={(e) => {
                    setUserName(e.target.value)
                }}
                
                />
            </div>
            
            </div>

            <div className='flex flex-wrap res-container'>
                { 
                   filteredRestaurants.map( (restaurant) => (
                   <Link to={"/restaurants/"+restaurant.info.id}>
                    
                        {/* // restaurant.data.promoted ?( */}
                        {/* //     <RestaurantCardPromoted key= {restaurant.info.id} resData={restaurant}/> */}
                    
                            <RestaurantCard key= {restaurant.info.id} resData={restaurant}/>
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}

export default Body;