import React from 'react';
import {useForm} from "react-hook-form";
import "./authForm.css"

function AuthForm({type}) {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const submitData = (data) => {
        console.log(data)
    }

  return  <div id="logreg-forms">
        <form className='form-horizontal' onSubmit={handleSubmit((data) => submitData(data))}>
            <h1 className="h3 mb-3 font-weight-normal text-center card-header" style={{fontWeight:700, color:"#4682B4"}}>{type}</h1>
            {type === 'signup' && <div className='form-group'><input type="text" id="user-name" className="form-control" placeholder="Username" /></div>}            
               <div className='form-group'>
             <input type="email" id="user-email" className="form-control mt-1 mb-1" {...register("email",{required:true, pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/})} 
            placeholder="Email address" /> 
               </div>
         {errors.email && <span className="text-danger">email is not valid</span>}
         <div className='form-group'>
         <input type="password" id="inputPassword" className="form-control" {...register("password", {required:true,pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/})} placeholder="Password" />
         </div>
            {errors.password && <span className="text-danger">password should  contain at least one numeric digit, one uppercase and one lowercase letter</span>}
            <button className="btn-default text-center m-2" style={{backgroundColor:"#4682B4", color:"white"}} type="submit"><i className="fas fa-sign-in-alt"></i>{type}</button>
       </form>
            
    </div>;
}

export default AuthForm;
