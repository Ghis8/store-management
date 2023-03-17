import {createSlice} from '@reduxjs/toolkit'
import appApi from '../services/appApi'
const initialState=[]

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{

    }
})

export default productSlice.reducer