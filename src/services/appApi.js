import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//create api
 export const appApi=createApi({
    reducerPath:'appApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000'}),
    endpoints:(builder)=>({
        signup:builder.mutation({
            query:user =>({
                url:'/api/user/register',
                method:'POST',
                body:user,
            })
        }),
        login:builder.mutation({
            query:user=>({
                url:'/api/user/login',
                method:'POST',
                body:user
            })
        })
    })
 })

 export const {useSignupMutation,useLoginMutation}=appApi

 export default appApi