import React from 'react'

const User = ({name,location}) => {
    return (
        <div className='usercard'>
          <h2>Name: {name}</h2>  
          <h3>Location: {location}</h3>
          <p>contact: @rajsharma123</p>
        </div>
    )
}

export default User;
