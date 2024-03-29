import React from 'react'; 
import { Link }from 'react-router-dom'

import './Users.css'

const User = ({ user }) => {

return (
<Link to={`/users/${user._id}`} className = 'user-profile-link'>
<h3>{ user.name.charAt(0).toUpperCase() }</h3>
<h5 className=''>{ user.name }</h5>
</Link>
)
}

export default User




