import React from 'react';
import { useStore } from '../Store';

const ViewData = () => {
    const Datas = useStore((state)=>state.Data);
    return (
        <div className='w-[100%] bg-gradient-to-tr from-[#C4DAFE] to-[#EEF5FF]'>
            <div className='px-8 py-8'>
            <div className='w-[100%]  bg-white rounded-lg shadow-lg'>
                <div className='  md:w-[50%] w-[100%] mx-auto py-14 px-4 md:px-0'>         
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                    CateGory
                </th>
                <th scope="col" className="px-6 py-3">
                    Sub-Category
                </th>
                <th scope="col" className="px-6 py-3 text-red-500">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            {
                Datas.length === 0 ? <h2 className=' mt-8 text-red-500 font-bold uppercase text-center w-full mx-auto'>
                     No Data Found
                </h2> :  
                    Datas.map((item,index)=>
                        <tr className="border-b" key={index}>
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                            {
                                item.name
                            }
                        </th>
                        <td className="px-6 py-4">
                            {item.category}
                        </td>
                        <td className="px-6 py-4">
                            {item.subCategory}
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    )
                }
                
                </tbody>
            
           
      
    </table>
</div>

                </div>
            </div>
            </div>
          
        </div>
    );
};

export default ViewData;