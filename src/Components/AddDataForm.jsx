import React from 'react';

const AddDataForm = () => {
    return (
        <div className='w-[100%] bg-gradient-to-tr from-[#C4DAFE] to-[#EEF5FF]'>
            <div className='px-8 py-8'>
            <div className='w-[100%] h-[calc(89vh-60px)] bg-white rounded-lg shadow-lg'>
                    <form className=' w-[50%] mx-auto py-14'>
                        {/* --------form title-------- */}
                        <h2 className=' font-[600]'>Please enter your name and pick the Sectors you are currently involved in.</h2>
                        {/* --------form title-------- */}
                        {/* --------Input for name------ */}
                        <div className='mt-8'>
                            <label htmlFor="name" className=' block font-[450]'>What's Your Full Name?</label>
                            <input type="text" id='name' className='mt-8 w-full outline-none focus:border-b-2 focus:border-blue-800' placeholder='Your Full Name...'/>
                         </div>
                        {/* --------Input for name------ */}
                        {/* --------Input for select ocopotion------ */}
                         <div className='mt-8'>
                            <label className=' block font-[450]'>Choose the category and sub-categor you are currently involved in.</label>
                            <div className=' flex mt-8 gap-8'>
                                 <select  className=' w-[40%] py-1 outline-none border-2 border-blue-600 rounded-md'>
                                    <option value="">Hello</option>
                                 </select>
                                 <select  className='w-[40%] py-1 outline-none border-2 border-blue-600 rounded-md'>
                                    <option value="">Hello</option>
                                 </select>
                            </div>
                         </div>
                        {/* --------Input for select ocopotion------ */}
                         <div class="flex items-center mb-4 mt-6">
                        <input id="checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 dark:bg-gray-700 "/>
                        <label for="checkbox" class="ml-2 text-sm font-[600] text-gray-900 ">Agree to terms</label>
                        </div>
                        {/* ------save button------ */}
                        <div className=' relative z-[1] overflow-hidden w-[100px] text-center'>
                            <button className='py-2 rounded-md button border border-gray-400 w-full hover:text-white'>Submit</button>
                        </div>
                        {/* ------save button------ */}
                    </form>
            </div>
            </div>
          
        </div>
    );
};

export default AddDataForm;