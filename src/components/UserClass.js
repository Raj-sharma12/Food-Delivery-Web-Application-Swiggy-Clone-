import React from 'react';
// import gitProfileShimmer from './gitProfileShimmer';
class UserClass extends React.Component{
    // in react will use props drilling in classBased component
    constructor(props){
        super(props);
        // console.log(props);
        // create a state variable in classbased component
        this.state =  {
            //create a state variable 
            userInfo:[],
            count:0,
        };
        console.log(props.name,"child constructor!");
    }
    
   
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7",{
        headers: {
            'Authorization': `ghp_0xk6ljiezapvcjagisgrer9s9ln9k84kzt3m`
        }
    });
    const res= await data.json();
    console.log(res);
    
    // update the state variable after retrieve the data from api
    this.setState({
        userInfo:res,
    })
        console.log(this.state.name,"child component did mount is called!");
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count || this.state.count !== prevState.count){

        }
    }
   componentWillUnmount(){
    
   
   }
    render(){
    
        
        const {count} = this.state;
       
        const {name,location,avatar_url,bio,created_at,following,followers} =this.state.userInfo;
        console.log(name,"child render!");
        // debugger;
        return(

                <div className='usercard'>
                  <img  width="100px" height="100px" src={avatar_url}/>
                <h2>Name: {name}</h2>  
                <h3>Location: {location}</h3>
                <p>Bio: {bio}</p>
                <h3>timestamps: {created_at}</h3>
                <h3>Following: {following}     Followers:{followers}</h3>
                <h3>count: {count}</h3>
                <button className='btn' onClick={() =>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>counter</button>
              
                </div>)
    
    };
}
export default UserClass;