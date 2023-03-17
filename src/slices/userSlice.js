import {createSlice} from '@reduxjs/toolkit'
import appApi from '../services/appApi'

const initialState=null

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{}
})

export default userSlice.reducer