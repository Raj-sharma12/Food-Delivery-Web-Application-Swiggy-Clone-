import { Component } from "react";
class Users extends Component{

    constructor(props){
        super(props);

    }
    render(){
        
        return(
        <div className="users-card">
            <img src={this.props.userData.avatar_url} />
            <h3>Name:{this.props.name}</h3>
           {/* <h4>Bio:{bio}</h4> */}
           </div>)
    }
}
export default Users;