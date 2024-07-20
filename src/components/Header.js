// import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState ,useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



// const [btnName,setBtnName] =useState("Login");
const Header = () => {
        
    const {loggedInUser}=useContext(UserContext);
    // console.log(data);
        // console.log(data);
    // usContext hook access data globally
    // let btnName= "Login";
    const [btnName,setBtnName] =useState("Login");
    console.log("Header Render!");
    // useEffect(() => {
    //     console.log("useEffect called!");
    // },[btnName]);
    const onlinestatus=useOnlineStatus();

    // now we are subscribing to a store using selector
    // const cartItems  = useSelector((store) => store.cart.items);
    const store = useSelector((store) =>store);
    const cartItems = store.cart.items;
    console.log(cartItems);
    return (
        <div className="flex justify-between m-2 bg-pink-100 sm:bg-yellow-500 lg:bg-blue-400 sm:shadow-lg">
            <div>
              <a href='/'><img width="100px" src={LOGO_URL}/></a>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-2 m-2">
                    <li className="px-2">OnlineStatus:{onlinestatus? "✅" : "🔴"} </li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/About">About us</Link> </li>
                    <li className="px-2"><Link to="/Contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/Grocery">Grocery</Link></li>
                 <Link to='/cart'><li className="px-2 text-xl font-bold">cart - ({cartItems.length} items)</li> </Link>
                <button  onClick={() => {
                    btnName==="Login" ? setBtnName("Logout"):
                    setBtnName("Login")
                    }}>{btnName}</button>
                     <li className="px-2 font-bold ">{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

// export the components for use in another file or folder
export default Header;