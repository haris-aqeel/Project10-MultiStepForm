import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'; // for everything


const Formthree = () => {
   
    const formik = useFormik({
        initialValues: {
            BankAccount: "",
            AccountNumber: 0,
            CardExpiryDate: "",
        },
        onSubmit: (values) => {

        },

        validationSchema: yup.object().shape({
            BankAccount: yup.string().required(),
            AccountNumber: yup.number().min(13, 'Your account number contains 13 characters')
            .max(13, 'Your account number must contain 13 characters').required(),
            CardExpiryDate: yup.date().required()

        })

    })

    return (
        <div>
            Formthree
        </div>
    )
}

export default Formthree
