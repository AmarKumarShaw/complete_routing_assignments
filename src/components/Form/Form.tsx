import React,{useState} from 'react';
import ThankYou from '../ThankYou/ThankYou';




interface IformValues{
    username:string ,
    email:string,
    phone:string,

}

interface Error {
    username?:string,
    email?:string,
    phone?:string,

}




const Form = () => {
    
    const initialValues = { username: "", email: "", phone: "" };
    const [formValues,setFormValues] = useState<IformValues>(initialValues);
    const [formErrors,setFormErrors] = useState<Error>({});
    const [isSubmit,setIsSubmit] = useState(false)

const handleChange = (e:any) => {
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value})
    console.log(formValues)
    console.log(setFormValues)
} 

const handleSubmit = (e:any) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    console.log(formErrors)
    setIsSubmit(true)
    console.log(formValues)
    
}

const validate = (values:{
    username:string,
    email:string,
    phone:string
}) :any => {
    const errors : Error =  {} as Error ;
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


    if (!values.username){
        errors.username ="Username is Required"
    }else if(values.username.length < 2){
        errors.username="Username should not be less than 2 characters"
    }
    if(!values.email){
        errors.email ="Email is Required"
    }else if(!email_regex.test(values.email)){
        errors.email="This is not a valid Email";
    }
    if(!values.phone){
        errors.phone = "phone is Required";
    }
    else if(values.phone.length !== 10){
        errors.phone= "Phone Number cannot be less than 10"
    }else if(!phone_regex.test(values.phone)){
        errors.phone = "Enter a Valid Phone Number"
    }

    return errors;
}


    return (
        <div className="ui container">

{(Object.keys(formErrors).length === 0 && isSubmit) ? <ThankYou name={formValues.username} phone={formValues.phone} email={formValues.email} /> :

            <div>
                <h1 className='large'>Login Form</h1>
                <form onSubmit={handleSubmit} action="" className="ui form">
                    <div className='field'>
                        <label htmlFor="">First Name</label>
                        <input  type="text" name='username' placeholder="Enter you first name" onChange={handleChange} />
                    </div>
                    {<p>{formErrors.username}</p>}
                    <div className='field'>
                        <label htmlFor="">Phone</label>
                        <input onChange={handleChange} type="tel" name="phone" value={formValues.phone} placeholder="Enter you Phone" />
                    </div>
                    {<p>{formErrors.phone}</p>}
                    <div className='field'>
                        <label htmlFor="">Email</label>
                        <input onChange={handleChange} type="email" name="email" value={formValues.email} placeholder="Enter you Email" />
                    </div>
                    {<p>{formErrors.email}</p>}
                   <button className='fluid ui button blue'>Submit</button>
                </form>
            </div>
             }
        </div>
    )
}

export default Form
