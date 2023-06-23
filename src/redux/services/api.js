import {createApi,fetchBaseQuery,retry}from '@reduxjs/toolkit/query/react'

const baseQuery=fetchBaseQuery({
    baseUrl:'https://store-management-backend-v1.onrender.com/api/',
    prepareHeaders:(headers,{getState})=>{
        const token=getState().auth.token
        if(token){
            headers.set('authorization',`Bearer ${token}`)
        }
        return headers
    }
})

const baseQuerwithRetry=retry(baseQuery, { maxRetries: 6 })

export const api=createApi({
    reducerPath:'api',
    baseQuery:baseQuerwithRetry,
    tagTypes:['Products','Users'],
    endpoints:()=>({})
})

