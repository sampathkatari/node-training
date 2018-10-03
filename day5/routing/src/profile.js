import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            Profile
            <NavLink to='/dashboard/profile'>Profile</NavLink>
        </div>
    )
}

export default Profile;