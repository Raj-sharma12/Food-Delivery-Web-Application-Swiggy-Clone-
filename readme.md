important notes for useState() hook
->never create a state variable in react outside the component
->try t call all hooks top of the component
->because js is synchronous single threaded language where all code execute line by line
->never use usestate() hook or create a state variable inside the if-else condition 
if(){
    const [btn,setbtn]=useState([]);
}
->never create a state variable inside for loop
->dont create your state variable inside our function
<!-- this will create a an inconsistency in your project -->

  React router dom library
  ->it is npm javascript library this library is known as react-router dom
  ->for installing this library use
  ->npm i react router dom library
  ->createBrowserRouter function creates a routing configuration inside our project
  ->what is configuration
  ->configuration means that some information that will define what will happens on a specific path
  creatBrowserRouter([
    /takes a list of paths
  ])
  ->RouterProvider is a component which provide a routing configuration to your app

  -react-router-dom library gives us to access in terms of error is it hook -useRouterError hook    
  ->childeren route concept in react most immportant concept if we want to going to another route then our header of app not change then or hide use children route concept for handle these childern route concept react-route-dom library probide Outlet component
  -you can nevigate to your different page without reloading the whole page without using anchor <a>tag for routing we use link tag which is given by react-router-dom library
  ->there are two types of routing in react
  -clientside routing 
  -server side routing

  -server side routing means you make a network call and the page about.html is coming from server 
  -in clientside routing we are not make an network call and all the component which are already loaded in our page
  -i am not fetching a new page thats why it is a client side routing   

  ->outlet  component is used for show a route on a specific condition
  -><outlet/> commponents it will replace by the component
  ->outlet component is used for reusing the component on a specific path

  -for read the restaurant id in our component again we have a super power which is given to us by react-roter-dom
  -hook known as useParams hook
  just extract the id from useParams hook

  -now i see how actual routing work fetches the dyanamic data from server or api and  in this part we perform dyanamic routing
  -how dyanamic routing working
  -create different routes for different restaurant menu
  -createa restaurant menu page
  -how do i tell dyanamic path i tell using ':' 
  /restaurant/:id
  {
    path:'/restaurants/:resId',
    element:<RestaurantMenu/>
  }
  meaning of this restaurant menu  route configuration is whenever i will on /restaurants/:resid please load the <restaurantMenu/> components
  -optional chaining
  ->The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
  ->Optional chaining, represented by ?. in JavaScript, is a new feature introduced in ES2020.

Optional chaining changes the way properties are accessed from deeply nested objects. It fixes the problem of having to do multiple null checks when accessing a long chain of object properties in JavaScript. 
-for comining a array of string using any , or . use join() operator in js 
-whenever wee will using a map function for iterate a array always using a key attricute
->how let use create our page dyanamic
-we will move on different restaurant menu using unique restaurant id
/restaurant/:resId how i will read this resId in my component
react-router-dom routing library provides a super power to read the dyanamic params from routes using useParams() hook
-how use this useParams() hook 
const {resId} =useParams();
//these resId params also mention on menu api
/i will uses <Link/> components from react-router-dom library for nevigating the route but behind the scene in browser it also like a anchor tag or <a> behind the scene link is using anchor tag 
->link is a wrapper over anchor tag
->when you make the nevigation a link then react-router-dom will keep the track of this home or nevigation is a link and you dont have to refresh the page behinnd the scene in browser side browser does not link browser understand es6 


-classBased component
-->classBased component is a older way of creating component
->in classBased components how component render into the  ui
// class based component is a normal js class
// -How do we create class in js
// syntax class componentname
// for make this component we will extends react.component
// this is a way to tell the react that it is  a class based component
// extends React.component will make react that know it is a class Based component
// -we will have a render() inside class based component which  returnpiece of jsx which will be displayed on to the ui
// -what is react.component?
// -this react.component is basically a class which is given to us by react and the UserClass inheriting some properties from this class

-we use props drilling in classBased component use constructor() and use super()
constructor(props){
  super(props);
}
-why we use super() method inside the constructor
Initialize this.props: When you call super(props), it passes the props to the React.Component constructor, ensuring that this.props is initialized properly within the constructor. If you don't call super(props), this.props will be undefined in the constructor.
-in classBased component we can pass more props in single components
/use these props in parent componets using this.props.property
-How we create state variable inside classbased component
-state was created wenever a instance of class was created
-what does it mean of rendering a functional component
-basicall if there is a component is load  in a webpage it means you are mounting that funtion  or calling that functional component
when i am loading the classBased component that means i am creating a instance of that class
-whenever we are creating a instace of class this constructor is called
-constructor is a best place to receive props and this  is the best place to create state variable
-this.state(){} state variable is  a big object contains all the state variable 


                   --------how update state avriable inside classbased component
                   / nerver do this because in classBased component normally we cant update the state variable Diractly
                        this.state.count = this.state.count+1;
 for update the  state variable in classBased commponent react gives you access to an important function this.setState() and this function use anywhere in class inside the setState() method we will pass a object this object will contain the updated state variable
 this.setState({
  count:this.state.count+1,
 })


what is constructor in javascript
ChatGPT
In JavaScript, a constructor is a special function used to create and initialize objects. When a function is used as a constructor, it is called with the new keyword, which creates a new instance of an object with its own properties and methods as defined by the constructor function.

Here's a basic example of how a constructor works in JavaScript:

javascript
Copy code
// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Create a new instance of the Person object
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name); // Output: Alice
console.log(person2.age);  // Output: 25
In this example:

Person is a constructor function.
The this keyword inside the constructor refers to the new object being created.
Properties name and age are assigned to the new object.
new Person('Alice', 30) creates a new object instance with the name property set to 'Alice' and the age property set to 30.
Additionally, in modern JavaScript (ES6 and later), you can use the class syntax to define constructors:

javascript
Copy code
// Define a class with a constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Create a new instance of the Person class
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name); // Output: Alice
console.log(person2.age);  // Output: 25
In this version, class provides a clearer and more concise way to define constructor functions and their associated properties and methods. The constructor method is a special method for creating and initializing objects created with the class keyword.

 question-why use super() method inside the constructor in  js

answer- The super() method is used in JavaScript within the constructor of a derived class (subclass) to call the constructor of the base class (superclass). This is necessary to properly inherit properties and methods from the base class.

When you create a subclass using the extends keyword, you must call super() in the subclass constructor before you can use this. This ensures that the base class's constructor is executed, setting up the initial state for the subclass.

-what is react classBased component lifeeet cycle ot render cycle 
-how the component render on a webpage

-aboutus component is the parent class and UserClass is the child component inside the about component
-when we render or load this aboutus component on the webpage when it will load line by line jsx code and and at that time it see there is classBased component then it loading the classBased component the classBased component is loaded then instance of the class is created and after the class instance is created the constrcutor of that class is called once the constructor is called then render() method is called(which is inside of classBased component) 


some people import component class from react
import React from 'react'
import {component} from 'react'

-classBased component have one important method componentDidMount method

componentDidMount(){
console.log("render");
}
when the component is loaded once constructor is called and once render is called and then these componentDidMount method is called
-componentDidMount() is used to make an api call

// -parent constructor
// -parent render
// -first child constructor
// -first child render
// -second child constructor
// -second child render
// -<DOM manupulation or updated or dom updated on the basis of batch the properties of multiple class based componente
// -react is optimizing the performance 
// -child component did mount was called 
// -child component did mount was render
// -parent component did mount was render

-----------when we call setState() function it is calleds a upadating pahase
setState() update the state variable at thattt time react triggered the render cycle 
-update cycle in react cycle says the componenetDidUpdate() function is called
-when react is updated our don there has something is known as componentDidUpdate() also


Mounting life cycle
-constructor
-render
-HTML only -dummy data
-componentDidMount()
-<API call>
<this.setState> 

-update cycle
-render() method is called(have a api data)
<HTMl is loaded with new data or APi data>
call componentDidUpdate()

-some react js developer says that useEffect() === componentDidMount()
it is wrong
-after first render() componentDidMount() is called and after every subsequent render it is updated not mounted
useEffect({

},[count])
- whenever the value of count is updated useEffect() will called  --
use these fuctionality in classBasedComponent 
componentDidUpdated(prevProps,prevState){
  if()
}




----------------custom hooks -------------------------
for optimize your code we use custom hooks
-end of the day hooks is special js function which is gives to us by react
for make a code -
1-reusable
2-maintainable
3-testable

-for make a modular your project use single responsibility princilpes
-creating a custom hooks is not mandatory thing but thats a good thinng because that will make your code look more readable ,modular,reusable


-create a online\offline feature in react project using custom hooks
Window: online event
The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.onLine switches to true.
create a custom hook useOnlineStatus
use online status event listener
const [onlinestatus,setOnlineStatus] = useState(true);
    // we check onlinestatus only one
    useEffect(() => {
        window.addEventListener("offline",() => {
            setOnlineStatus(false);
        });
        window.addEventListener("online",() => {
            setOnlineStatus(true);
        });

        chunking 
        -dyanamic bundling
        -code spilting
        on demand loading means whenever we going to link or nevigate the [age then there is loaded ]
        we will not import grocery like this
        import grocery from './component/grocery
        we import using Lazy() frunction 
        we will loading a component using lazy() function which  is giving to us by react lazy function comes from our react package lazy function import as a named import 
        this takes a callback function inc which i will write a import this import is note a import just like import modules but this import is function and this function will take a path of this grocery component

        -this grocery code takes more time or 12 ms come to the browser  happens react is very fast react tried to load the grocery component but code was not there that is why react suspended the rendering  so what happening grocery code was not there so that is why react was suspended the rendering
        so code is not there so component wasn't render so react threw an error
        -to handle this state use 'suspense' which is giving to us by react
        -suspense is a component it comes from react library 

        ----tailwind css
        {
  "plugins": {
    "tailwindcss": {}
  }
} postcssrc it means that you have to use tailwind inside postcssr
-if we use tailwind parcel  need to use postcssrc to read tailwind css
-postcssrc is  kind of a way that project understand what is written inside tailwind 



/* /* @tailwind base;
@tailwind components;
@tailwind utilities; */

.header{
    display: flex;
    justify-content: space-between;
    border:1px solid black;
}
.logo-container{
  width:80px;
  height:80px;
}
.nav-items  > ul{
    font-size: 15px;
    display:flex;
    padding:0px 20px;
    list-style-type: none;
}
.nav-items > ul > li{
    padding:5px;
    margin:5px;
}
.res-card{
    width:200px;
    height:300px;
    padding:5px;
  
    
     border: 1px solid black; */
 }
.res-card:hover{
    border:1px solid black;
    cursor: pointer;
}
.search{
    margin-top:20px;
    padding: 10px;
}
.search > input{
    padding:10px;
    width:300px;
    border:1px solid #000;
    font-size:20px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.search > button{
    padding: 14px;
    width: 100px;
    
}
.res-logo{
    width:100%;
    height:40%;}
    /* padding:5px; */

.res-container{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:10px;
    gap:10px;
}

.ADC{
    display: flex;
    justify-content: space-between;
}
.filter > button{
    
    cursor: pointer;
    margin: 20px;
    padding: 0px 10px;
    width:auto;

}
.shimmer-container{
    margin-top:100px;
    display:flex;
    gap:10px;
    justify-content: center;
    flex-wrap: wrap;
}
.shimmer-card{
    width:200px;
    height:300px;
    padding:5px;
    background:gray;
}
.img-fake{
    width:100%;
    height:40%;
    
    background-color:#fff;
}

.btn{
    width:100px;
    height:30px;
    margin-top: 10px; 
    /* /* margin-bottom:10px; */
}
.search{
    padding:0px;  
}
.search-field{
margin-top:20px;
height:15px;
width:100px;
}
.filter{
    display: flex;

} 
 .usercard{
    margin: 10px;
    padding:10px;
    border:1px solid  black;
}
.users-card{
    width:150px;
    height:200px;
    border:1px solid black; */ 
    /* /* margin:10px; */
}
.usercard>img{
border:1px solid black;
border-radius:50%;
background-size: cover;
}
.git-users{
    display: flex;
    flex-wrap:wrap;
    margin:10px;
}
.git-logo{
    width: 100px;
    height:100px;
    border:1px solid black;
    
}  */

-Data is the new oil
Higher order component 
-higher order component takes a component as an input and enhances that component and give some feature to component and returns it back

-controlled and uncontrolled component
-lifting the state up
-react js has two layer 
-1 data layer
2-ui layer
ui layer is powered by data layer

//there controlled or uncontrolled component
new concept in react there is used to handel data in your react app
usecontext hook
in react application the data is to passed from parent to children
data flow in one direction from top to bottom
props drilling or passing props is not a good way
the data is presence in some where and we want to access the data somewherer how will i do that
in some scenerios where we have to some kind of global data
-for access the data anywhere on your app react gives us to super power is useContext hook
-means of context we avoid props drilling and avoid to pass props

usecontext which is like global place  where your data is kept anybody canbe access that data
-context is a global kind of object in react
createContext() is comes from react library 

create context in react using react utility function creatContext()
<!-- context is a big object in react which is global place of accessing data anywhere -->
const UserContext=createContext(
    {
        loggedInUser:Default user,
    }
)

//and use these context data anywhere using react super power hook useContext() hook 
const {loggedInUser} = useContext(UserContext);


//hoe to use context inside classBased component
//when you create a context as well so react gives you a power of .consumer as wel

<!-- first import the context utility in fil -->
import UserContext from '/path'

UserContext.Consumer> {({loggedInUser}) =><h1>{loggedInUser}</h1> }</UserContext.Consumer>

both are these useContext and .Consumer used for consume the context
<!-- if you update the current and provide the value to context to .Provider   -->
<UserContext.Provider value={{loggedInUser:userName }}>
</UserContext.Provider>


we learn redux 
how we manage  our state and create our store

redux works on the datalayer of our application
for mid size application you dont need redux 
but for large size application you need redux
Redux and react both are different libraries
libraries which is used for managing states in our app
like redux,Zustand library
redux is primarily used for handling state manangement
A aaplication becomes easier to debug