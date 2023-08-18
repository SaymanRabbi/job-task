import React from 'react';

const Navbar = () => {
    return (
        <div className=' h-[50px] py-2 w-full px-8 flex justify-end items-center'>
            <div className=' border-gray-400 border px-2 py-1 rounded-md'>
            <h2 className=' uppercase font-bold cursor-pointer'>
                Edit
             </h2>
            </div>
        </div>
    );
};

export default Navbar;