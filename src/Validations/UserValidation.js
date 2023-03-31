import * as yup from 'yup'

export const userValidate = yup.object({
    fullname: yup.string().min(8, "Name must be atleast 8 characters").required("Name is required"),
    username: yup.string().min(3, "Username must be atleast 3 characters").required("Username is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    age: yup.number().min(18, "Age must be 18 and above").required("Age is required"),
    image: yup.mixed().required('Please select a file').test('fileFormat', 'Unsupported file format', (value) => {
        return ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].includes(value.type);
    }),
    password: yup.string().required("Password is required").min(6, "Password must be 6 characters long or more"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
})
export const loginValidate = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be 6 characters long or more"),
})