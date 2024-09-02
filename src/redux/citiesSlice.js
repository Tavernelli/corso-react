import { createSlice } from '@reduxjs/toolkit'

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [{
            id: 0,
            name: "Roma",
            descrizione: "Roma",
            imgURL:
                "https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D",
            isVisited: false,
        },
        {
            id: 1,
            name: "Parigi",
            descrizione: "Parigi",
            imgURL:
                "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlnaXxlbnwwfHwwfHx8MA%3D%3D",
            isVisited: false,
        },
        {
            id: 2,
            name: "Tokio",
            descrizione: "Tokio",
            imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYyyy92DfnVa7FBSUzNeReJoDn8KREBlsjw&s",
            isVisited: false,
        },
        ]
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer


