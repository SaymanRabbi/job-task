import { create } from "zustand";
const store = (set)=>({
    Data:[],
    getData :(data)=>set((state)=>({Data:data})),
    setData:(data)=>set((state)=>({Data:[...state.Data,data]})),
    setFilterData:(data)=>set((state)=>({Data:[
        ...state.Data.filter((item)=>item._id !== data._id),
         {
            _id:data._id,
            name:data.name,
            subCategory:data.subCategory,
            agree:true,
            category:data.category,
         }

    ]})),
})

export const useStore = create(store);