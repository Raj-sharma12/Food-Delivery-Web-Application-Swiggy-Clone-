import { useCallback, useContext } from 'react'
import {CDN_URL} from '../utils/constants'
// import UserContext from '../utils/UserContext'

// resData as props
const RestaurantCard = ({resData}) => {
    // const {loggedInUser}=useContext(UserContext);
    // console.log(props);
    const {cloudinaryImageId,cuisines,name,avgRating,deliveryTime,costForTwo} = resData?.info
    
    return (
        <div className='p-4 m-4 res-card w-[200px] h-[auto] rounded-lg  bg-gray-100 hover:bg-gray-200 ' >
            <img className="rounded-lg h-[100px] w-[100%]" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className='py-4 text-lg font-bold'>{name}</h3>

            <h4 className='overflow-hidden break-words whitespace-normal text-wrap'>{cuisines.join(",")}</h4>
             <h3>{avgRating}⭐</h3>
            <h5>{deliveryTime} minutes</h5>
            <h4>{costForTwo}₹</h4>
            {/* <h4>{loggedInUser}</h4> */}
          
           
        </div>
    )
}


// create a Higher order component
// input -restaurant card => restaurantcard promoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;