import { apiSlice } from "./apiSlice";


export const genreApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addGenre: builder.mutation({
            query: (name) => ({
                url: "genre",
                method: "POST",
                body: name
            })
        })
    })
})

export const { useAddGenreMutation } = genreApi