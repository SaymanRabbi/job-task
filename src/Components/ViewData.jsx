import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useStore } from '../Store';
import Data from './Data';

const ViewData = () => {
    const Datas = useStore((state)=>state.Data);
    const setFilterData = useStore((state)=>state.setFilterData);
    const [inDex,setIndex]=useState(0);
    const [edit,setEdit]=useState(false);
    const [loading,setLoading]=useState(false);
    const [value,setValue]=useState('');
    const [name,setName]=useState('');
    const GetData = useStore((state)=>state.getData);
    const EditData = ()=>{
        setEdit(!edit);
    }
    const SaveData = async(id,category)=>{
        const Data = {
            _id:id,
            name:name,
            subCategory:value,
            category:category
        }
        const res = await axios.put('http://localhost:5000/api/edit',{
            Data
        })
        setFilterData(Data);
        toast.success('Edit Successfully')
        setEdit(!edit);
         
    }
    // -------get data -------
    useEffect(()=>{

        const res = async () => {
            setLoading(true)
            const res = await axios.get('http://localhost:5000/api/get')
            GetData(res.data.data)
            setLoading(false)
        }
        res()
    },[])
    // -------get data -------
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
                Datas.length === 0 && !loading   ? <h2 className=' mt-8 text-red-500 font-bold uppercase text-center w-full mx-auto'>
                     No Data Found
                </h2> :  
                    Datas.map((item,index)=>
                        <tr className="border-b" key={index}>
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">

                            {
                                edit && index === inDex ? <input type="text" className='md:w-[100%] w-[100%] py-1 outline-none px-2 border-2 border-blue-600 rounded-md' placeholder={item.name}
                                onChange={(e)=>{setName(e.target.value)}}
                                /> :item.name
                            }
                        </th>
                        <td className="px-6 py-4">
                            {item.category}
                        </td>
                        <td className="px-6 py-4">
                            {
                                index === inDex && edit ? <select  className='md:w-[100%] w-[100%] py-1 outline-none border-2 border-blue-600 rounded-md'
                                onChange={(e)=>{setValue(e.target.value)}}
                                  defaultValue={item.subCategory}
                               >
                                  {
                                      Data.map((items)=>{
                                          return (
                                              items.name === item.category && items.value.map((itemss,index)=>{
                                                  return(
                                                      <option key={index} value={itemss}>{itemss}</option>
                                                  )
                                              })
                                          )
                                      })
                                  }
                               </select> : item.subCategory
                            }
                            
                        </td>
                        <td className="px-6 py-4">
                            {
                                !edit  ? <button className=' text-white bg-red-500 px-2 py-1 rounded-md'
                                onClick={()=>{setIndex(index);EditData()}}
                                >
                                    Edit
                                </button> : edit && index === inDex ? <button className=' text-white bg-red-500 px-2 py-1 rounded-md'
                            onClick={()=>SaveData(item._id,item.category)}
                            >
                                save
                            </button> : <button className=' text-white bg-red-500 px-2 py-1 rounded-md'
                                onClick={()=>{setIndex(index);EditData()}}
                                >
                                    Edit
                                </button> 
                            }
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