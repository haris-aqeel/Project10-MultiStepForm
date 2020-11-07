import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'; // for everything



const Formtwo = () => {

    const formik = useFormik({
        initialValues: {
            description: "",
            github: "",
            linkeden: "",
            facebook: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },

        validationSchema: yup.object().shape({

            description: yup.string()
                        .min(50, '(Description < 50) Enter more words...')
                        .required(),

            github: yup.string().url().required(),
             
            linkeden: yup.string().url().required(),

            facebook:  yup.string().url().required()

            

        })


    })

    return (
        <div>
            Formtwo
        </div>
    )
}

export default Formtwo
