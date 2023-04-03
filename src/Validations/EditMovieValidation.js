import * as yup from 'yup'

export const editMovieImageValidate = yup.object({
    imageUrl: yup.mixed().required('Please select a file').test('fileFormat', 'Unsupported file format', (value) => {
        return ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].includes(value.type);
    }),
    coverUrl: yup.mixed().required('Please select a file').test('fileFormat', 'Unsupported file format', (value) => {
        return ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].includes(value.type);
    })

})

export const editMovieValidate = yup.object({
    productionCompanies: yup.array()
        .of(yup.object().shape({
            id: yup.string().required(),
            name: yup.string().required()
            // add more validation rules for other properties as needed
        })
        ).required("Production company or companies are required"),
    revenue: yup.number().positive("Revenue must be a positive number").integer().required(),
    release_date: yup.date("Must be in a date format").required(),
    budget: yup.number().positive("Budget must be a positive number").integer().required(),
    releaseStatus: yup.bool().required(),
})