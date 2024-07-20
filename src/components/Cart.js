import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart=() => {

    // const store = useSelector((store) => store);
    // const cartItems= store.cart.items
    const cartItems= useSelector((store) =>store.cart.items);  
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return(    
        <div className="p-4 m-4 text-center">
            <h1 className="text-2xl font-bold">Cart</h1>
           
                <div className="w-6/12 m-auto ">
                <button className="p-2 m-2 text-white bg-red-700 border rounded-sm" onClick={
                    handleClearCart
                }>clear Cart</button>
                {cartItems.length === 0 && <h1 className="text-xl font-bold">Cart is Empty Add Items to the cart</h1>}
                    <ItemList items={cartItems}/>
                </div>
            </div>
    )
}
export default Cart;