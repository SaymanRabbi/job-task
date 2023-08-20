import React, { useEffect, useState } from 'react';
import { useStore } from '../Store';
import Data from './Data';

const AddDataForm = () => {
    const [fullName,setFullName]=useState('');
    const [name,setName]=useState('Select Category');
    const [value,setValue]=useState('Select Sub Category');
    const [error,setError]=useState('');
    const [checked,setChecked]=useState(false);
    const setData = useStore((state)=>state.setData);
    const [agree,setAgree]=useState(
        name === 'Select Category' || value === 'Select Sub Category' ? false : true
        );
        // -----Changes the value of name and value when the user selects the category and sub category
        const HandelChange = (e) => {
            setName(e.target.value);
        }
        // -----Changes the value of name and value when the user selects the category and sub category
        // -----Changes the value of name and value when the user selects the category and sub category
    const HandelValueChange = (e) => {
        setValue(e.target.value);
    }
    // -----Agree to terms and conditions
    const HandelAgree = () => {
        setChecked(!checked);
        if(name === 'Select Category' || value === 'Select Sub Category'){
            return  setAgree(false);
        }
        setAgree(!agree);
    }
    // -----Agree to terms and conditions
    // -----Submit the form
    const HandelSubmit = (e) => {
        e.preventDefault();
        const fullName = e.target.name.value
        if(fullName === '' || fullName.trim().length<3){
            setError(true)
            return
        }
        const Data = {
            name:fullName,
            category:name,
            subCategory:value,
            agree:checked
        }
        setData(Data);
    }
    // -----Submit the form
    useEffect(()=>{
        if(fullName != '' && fullName.trim().length>=3){
            setError(false)
        }
            if((name === 'Select Category' || value === 'Select Sub Category') && (checked)){
                return setAgree(false)
            }
            if((name !== 'Select Category' || value !== 'Select Sub Category') && (checked)){
                return setAgree(true)
            }
          
    },[name,value,fullName])
    return (
        <div className='w-[100%] bg-gradient-to-tr from-[#C4DAFE] to-[#EEF5FF]'>
            <div className='px-8 py-8'>
            <div className='w-[100%]  bg-white rounded-lg shadow-lg'>
                    <form className=' md:w-[50%] w-[100%] mx-auto py-14 px-4 md:px-0'
                    onSubmit={HandelSubmit}
                    >
                        {/* --------form title-------- */}
                        <h2 className=' font-[600]'>Please enter your name and pick the Sectors you are currently involved in.</h2>
                        {/* --------form title-------- */}
                        {/* --------Input for name------ */}
                        <div className='mt-8'>
                            <label htmlFor="name" className=' block font-[450]'>What's Your Full Name?</label>
                            <input type="text" name='name' id='name' className={`
                            mt-8 w-full outline-none focus:border-b-2 
                            ${error?"border-red-500":"focus:border-blue-800"}
                            `} placeholder='Your Full Name...'
                            onChange={(e)=>setFullName(e.target.value)}
                            />
                            {error && <span className='text-red-500 text-sm mt-2'>Please enter your full name</span>}
                         </div>
                        {/* --------Input for name------ */}
                        {/* --------Input for select ocopotion------ */}
                         <div className='mt-8'>
                            <label className=' block font-[450]'>Choose the category and sub-categor you are currently involved in.</label>
                            <div className=' flex mt-8 gap-8'>
                                 <select  className=' md:w-[40%] w-[50%] py-1 outline-none border-2 border-blue-600 rounded-md'
                                 onChange={HandelChange}
                                 defaultValue={name}
                                 >
                                    {
                                        Data.map((item,index)=>{
                                            return(
                                                <option  key={index} value={item.name}
                                                 
                                                >{item.name}</option>
                                            )
                                        })
                                    }
                                 </select>
                                 <select  className='md:w-[40%] w-[50%] py-1 outline-none border-2 border-blue-600 rounded-md'
                                  onChange={HandelValueChange}
                                    defaultValue={value}
                                 >
                                    {
                                        Data.map((item)=>{
                                            return (
                                                item.name === name && item.value.map((item,index)=>{
                                                    return(
                                                        <option key={index} value={item}>{item}</option>
                                                    )
                                                })
                                            )
                                        })
                                    }
                                 </select>
                            </div>
                         </div>
                        {/* --------Input for select ocopotion------ */}
                         <div className="flex items-center mb-4 mt-6">
                        <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 dark:bg-gray-700 "
                         onClick={(e)=>HandelAgree(e)}
                        />
                        <label htmlFor="checkbox" className="ml-2 text-sm font-[600] text-gray-900 ">Agree to terms</label>
                        </div>
                        {/* ------save button------ */}
                        <div className=' relative z-[1] overflow-hidden w-[100px] text-center'>
                            <button className={`py-2 rounded-md  border border-gray-400 w-full  ${agree?"button hover:text-white":" bg-gray-200 text-gray-300"}`}
                            disabled={!agree}
                            type='submit'
                            >Submit</button>
                        </div>
                        {/* ------save button------ */}
                    </form>
            </div>
            </div>
          
        </div>
    );
};

export default AddDataForm;