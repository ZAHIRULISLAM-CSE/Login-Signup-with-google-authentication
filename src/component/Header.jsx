import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center gap-4 text-2xl mt-6'>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/signup'>SignUp</Link>
        </div>
    );
};

export default Header;