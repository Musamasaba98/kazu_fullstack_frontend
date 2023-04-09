import { apiSlice } from "./apiSlice";


export const companyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCompany: builder.mutation({
            query: (name) => ({
                url: "company",
                method: "POST",
                body: name
            })
        })
    })
})

export const { useAddCompanyMutation } = companyApi