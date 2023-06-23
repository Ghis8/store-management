import { api } from "./api";

const userApi=api.injectEndpoints({
    endpoints:builder=>({
        registerUser:builder.mutation({
            query(data){
                return{
                    url:'user/register',
                    method:'POST',
                    body:data
                }
            },
            invalidatesTags:['Users']
        }),
        loginUser:builder.mutation({
            query(data){
                return{
                    url:'user/login',
                    method:'POST',
                    body:data
                }
            },
            invalidatesTags:['Users']
        }),
        getUsers:builder.query({
            query:()=>'users',
            providesTags:['Users']
        }),
        deleteUser:builder.mutation({
            query(id){
                return{
                    url:`user/delete-user/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:['Users']
        }),
        addEmployee:builder.mutation({
            query(data){
                return{
                    url:'user/add-employee',
                    method:'POST',
                    body:data
                }
            },
            invalidatesTags:['Users']
        })

    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetUsersQuery,
    useDeleteUserMutation,
    useAddEmployeeMutation
}=userApi