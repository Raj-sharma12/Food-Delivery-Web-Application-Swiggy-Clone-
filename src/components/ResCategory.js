import { useState } from "react";
import ItemList from "./ItemList";

// create an accordian for categories
const ResCategory =({data,showItems,setShowIndex}) => {
    //i dont want this showItems to restaurant category have to manage itself colllapse or open accordian
    // this restaurant categories have not their own statae to collapse or sgow the itemlist any particular category
    // const [showItems,setShowItems] = useState(false);
    // console.log(data);
    const handleClick = () =>{
        setShowIndex(showItems); 
    }
    // console.log(data?.itemCards?.length);
    return(
    <div>
    <div className="w-6/12 p-4 mx-auto my-4 text-black bg-gray-100 shadow-lg">
        {/* accordian header */}
        {/* accordian body */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-bold text-black">{data.title}({data.itemCards.length})</span>
      <span>🔽</span>
     </div>
     
     <div/>
    { showItems && <ItemList items={data.itemCards}/>}
   
    </div>
    
    </div>);
}

export default ResCategory;