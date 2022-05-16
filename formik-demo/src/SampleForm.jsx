import React from 'react'
import {Formik , Form , Field ,ErrorMessage} from 'formik'

const SampleForm = () => {
 
    const initialValues ={
        name:'',
        email:'',
        password:''
    }

    const validate = values => {
        const errors = {}

        if(!values.name)
        {
            errors.name="Name is Required !!!"
        }

        if(!values.email)
        {
            errors.email="Email is Required !!!"
        }

        if(!values.password)
        {
            errors.password="Password is Required !!!"
        }

        return errors
    } 

    const onSubmit = values =>{
        console.log("FOrm is submitted",values)
    }
    return (
    <div className='container'>
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <Form>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <Field name='name' type='text'/>
                    <ErrorMessage name='name'>
                        {
                            (errorsMsg)=> <div className='sample-form-errors'>{errorsMsg}</div>
                        }
                    </ErrorMessage>
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <Field name='email' type='email'/>
                    <ErrorMessage name='email'/>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <Field name='password' type='password'/>
                    <ErrorMessage name='password'/>
                </div>

                <button type='submit' className='btn btn-success w-100 mt-2'>Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default SampleForm