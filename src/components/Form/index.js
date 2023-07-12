import {useState,useRef} from 'react'
import './form.scss';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef()
    const [formControl,setFormControl] = useState(null);
    const validationSchema =             
    Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        message: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      })
    const {handleSubmit,handleChange,errors,touched} = useFormik({
        initialValues: {
            name:"",
            email:"",
            message:""
        },
        validationSchema,
        onSubmit: (values,{resetForm}) => {
            console.log(values)
            emailjs.sendForm('service_6fc8zyz', 'template_jkkmp1b', form.current, 'Gv2hR1Zw-loRct25j')
            .then((result) => {
                setFormControl(true)
                setTimeout(()=>{
                    setFormControl(null)
                },5000)
            }, (error) => {
                setFormControl(false)
                setTimeout(()=>{
                    setFormControl(null)
                },5000)
            });
            resetForm()
        }
    })
  return (
    <form className='form' onSubmit={handleSubmit} ref={form}>
        <div className='form__input-group'>
            <input name='name' onChange={handleChange} placeholder='Name'/>

            {errors.name && touched.name ? <small>{errors.name}</small>  : null}
        </div>
        <div className='form__input-group'>
            <input name='email' onChange={handleChange} placeholder='Email'/>
            {errors.email && touched.email ? <small>{errors.email}</small>: null}
        </div>
        <div className='form__input-group'>
            <textarea name='message' onChange={handleChange} rows={5} placeholder='Message'></textarea>
            {errors.message && touched.message ?  <small>{errors.message}</small> : null}
        </div>
        <div className='form__btn-group'>
            {formControl ? <small>Your message has been sent!</small> : formControl === null ? <div></div> :   <small style={{color:"red"}}>There is an error!</small>}
            <button type='submit'>Send Message</button>
        </div>

    </form>
  )
}

export default Form