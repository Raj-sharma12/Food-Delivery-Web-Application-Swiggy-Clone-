import {Component, useContext} from 'react'
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';


// import Users from './Users';
class About extends Component{
     
 constructor(props){
            super(props)
            // console.log("parent constructor!");
            // create a state variable
       this.state = {
        userInfo:[],
       };
        // console.log(userInfo)
            };
            render(){
    // console.log("parent render");

    return (<>       
         <h1>This is a about page</h1>
         <UserContext.Consumer>{({loggedInUser}) => <h1 className='font-bold '>{loggedInUser}</h1>}</UserContext.Consumer>
       
            <UserClass />
             </>
             );
            }
}
export default About;

