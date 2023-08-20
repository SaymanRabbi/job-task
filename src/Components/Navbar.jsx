import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const path  = useLocation().pathname;
    return (
        <div className=' h-[60px] py-2 w-full px-8 flex justify-end items-center'>
            <div className=' border-gray-400 border px-4 py-1 rounded-md'>
                {
                    path === '/' ? <Link to={'/view'} className='uppercase font-bold cursor-pointer'>View</Link>:<Link to={'/'} className='uppercase font-bold cursor-pointer'>Edit</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;