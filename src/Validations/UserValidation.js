import * as yup from 'yup'

export const userValidate = yup.object({
    name: yup.string().min(8, "Name must be atleast 3 characters").required("Name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be 6 characters long or more"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
})
export const loginValidate = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be 6 characters long or more"),
})