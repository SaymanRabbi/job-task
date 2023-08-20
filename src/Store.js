import { create } from "zustand";
const store = (set)=>({
    Data:[],
    setData:(data)=>set((state)=>({Data:[...state.Data,data]})),
    setFilterData:(data)=>set((state)=>({Data:[
        ...state.Data.filter((item)=>item.id !== data.id),
         {
            id:data.id,
            name:data.name,
            subCategory:data.subCategory,
            agree:true,
            category:data.category,
         }

    ]})),
})

export const useStore = create(store);