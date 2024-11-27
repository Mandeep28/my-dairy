import { object, ref, string, } from 'yup';

export const loginSchema = object({
    email : string().email().required("Please enter a valid email"),
    password : string().min(6).required("Please enter password")
})
export const registerSchema = object({
    name : string().min(3).max(30).required("Please enter a valid name"),
    email : string().email().required("Please enter a valid email"),
    password : string().min(6).required("Please enter password"),
    confirm_password : string().required().oneOf([ref('password'), null] , 'Password must be match')
})

export const forgotSchema = object({
    email : string().email().required("Please enter a valid email")
})

export const resetSchema = object({
    password : string().min(6).required("Please enter password"),
    confirm_password : string().required().oneOf([ref('password'), null] , 'Password must be match')
})