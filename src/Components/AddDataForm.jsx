import React from 'react';

const AddDataForm = () => {
    return (
        <div className='w-[100%] bg-gradient-to-tr from-[#C4DAFE] to-[#EEF5FF]'>
            <div className='px-8 py-8'>
            <div className='w-[100%] h-[82vh] bg-white rounded-lg shadow-lg'>
                    <form className=' w-[50%] mx-auto py-14'>
                        <h2 className=' font-[600]'>Please enter your name and pick the Sectors you are currently involved in.</h2>
                        <div className='mt-8'>
                            <label htmlFor="" className=' block font-[450]'>What's Your Full Name?</label>
                            <input type="text"  className='mt-8 w-full outline-none focus:border-b-2 focus:border-blue-800' placeholder='Your Full Name...'/>
                         </div>
                    </form>
            </div>
            </div>
          
        </div>
    );
};

export default AddDataForm;