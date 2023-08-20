import { create } from "zustand";

const store = (set)=>({
    Data:[],
    setData:(data)=>set((state)=>({Data:[...state.Data,data]})),
})

export const useStore = create(store);