import React , {lazy,Suspense, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter } from "react-router-dom";
// import About from './components/About'
import { RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
// import Grocery from './components/Grocery';
import { useEffect } from 'react';
// import {Provider} from '
import appStore from './utils/appStore';
import {Provider} from 'react-redux'
import Cart from './components/Cart';



// -chunking
// -code splitting
// -dyanamic bundling
// -lazy loading 
// -ondemand loading
// create a functional component
const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));
const AppLayout =() => {

    
    const [userName,setUserName] = useState()
    //some authentication logic
    useEffect(() => {
        // make and api call and send user and password
        const data = {
            name:'Piyush Agrawal',
        }
        setUserName(data.name);
    },[]);
    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className='app'>
         <Header/>
               
                {/* <Body/> */}
                {/* if we going to /about router 
                <About/> */}
                <Outlet/>
              
        </div>
        </UserContext.Provider>
        </Provider>
        /* // </UserContext.Provider> */
        
    );
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
    children:[
        {
            path:"/",
            element:<Body/> 
        },
        {
            path:"/About",
            element:(
            <Suspense fallback={<h1>Loading...........</h1>}><About/></Suspense>)
        },
        {
            path:"/Contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:'/Grocery',
            element:(<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>),
        },{
            path:'/cart',
            element:<Cart/>
        }
        
    ]},
    {
        
    }
]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);