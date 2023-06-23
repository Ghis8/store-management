import { api } from "./api";

const productApi=api.injectEndpoints({
    endpoints:builder=>({
        createProduct:builder.mutation({
            query(data){
                return{
                    url:'addProduct',
                    method:'POST',
                    body:data
                }
            },
            invalidatesTags:['Products']
        }),
        getProduct:builder.query({
            query(name){
                return{
                    url:'product',
                    method:'GET',
                    body:name
                }
            },
            invalidatesTags:['Products']
        }),
        updateProduct:builder.mutation({
            query({data,id}){
                return{
                    url:`update-product/${id}`,
                    method:'PATCH',
                    body:data
                }
            },
            invalidatesTags:['Products']
        }),
        getCategory:builder.mutation({
            query(name){
                return{
                    url:'category',
                    method:'POST',
                    body:name
                }
            }
        }),
        deleteProduct:builder.mutation({
            query(id){
                return{
                    url:`deleteProduct/${id}`,
                    method:"DELETE"
                }
            },
            invalidatesTags:['Products']
        })
    })
})

export const {
    useCreateProductMutation,
    useGetProductQuery,
    useUpdateProductMutation,
    useGetCategoryMutation,
    useDeleteProductMutation
}=productApi