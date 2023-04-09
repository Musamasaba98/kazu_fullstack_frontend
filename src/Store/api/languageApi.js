import { apiSlice } from "./apiSlice";


export const languageApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addLanguage: builder.mutation({
            query: (name) => ({
                url: "language",
                method: "POST",
                body: name
            })
        })
    })
})

export const { useAddLanguageMutation } = languageApi