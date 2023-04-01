import { apiSlice } from "./apiSlice";


export const movieApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postMovies: builder.mutation({
            query: (data) => ({
                url: 'movies/create',
                method: 'POST',
                body: data
            }),
            invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
        })
        ,
        getMovies: builder.query({
            query: () => ({
                url: `movies`,
                credentials: "include",
            }),
            provideTags: (result) =>
                // is result available?
                result
                    ? // successful query
                    [
                        ...result.map(({ id }) => ({ type: 'Movies', id })),
                        { type: 'Movies', id: 'LIST' },
                    ]
                    : // an error occurred, but we still want to refetch this query when `{ type: 'Movies', id: 'LIST' }` is invalidated
                    [{ type: 'Movies', id: 'LIST' }],
        }),
        getMovie: builder.query({
            query: (id) => ({
                url: `movies/${id}`,
                credentials: "include",
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Movies', id }],
        }),
        deleteMovie: builder.mutation({
            query(id) {
                return {
                    url: `movies/${id}`,
                    method: 'DELETE',
                }
            },
            // Invalidates all queries that subscribe to this Movies `id` only.
            invalidatesTags: (result, error, id) => [{ type: 'Movies', id }],
        }),
        updateMovie: builder.mutation({
            query(id) {
                return {
                    url: `movies/${id}`,
                    method: 'PATCH',
                }
            },
            // Invalidates all queries that subscribe to this Movies `id` only.
            invalidatesTags: (result, error, id) => [{ type: 'Movies', id }],
        }),
    }),
})

export const {
    usePostMoviesMutation,
    useGetMoviesQuery,
    useGetMovieQuery,
    useDeleteMovieMutation,
    useUpdateMovieMutation
} = movieApi