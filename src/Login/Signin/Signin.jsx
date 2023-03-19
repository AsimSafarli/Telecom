
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


function Signin() {
  const [errorMessages,setErrorMessages]=useState({})
  const [isSubmitted,setIsSubmitted]=useState(false)
    const database =[
      {
        username:'Asim',
        password:'Asim1414'
      },
      {
        username:'Azerbaijan',
        password:'44day'
      }
    ]
    const errors={
      uname:'invalid username',
      pass:'invalid passsword'
    };
    const handleSubmit = (event) => {
    
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
 
      const userData = database.find((user) => user.username === uname.value);
  
    
      if (userData) {
        if (userData.password !== pass.value) {
          setErrorMessages({name:pass,message:errors.pass})
        }
        else{
          setIsSubmitted(true)
        }
      }
      else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };

   const renderErrorMessage=(name)=>{
    name===errorMessages.name && (
      <div className='eror'>{errorMessages.message}</div>
    )
   }

  const renderForm=(
    <div  
    className="justify-center items-center flex bg" >'
 
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center  signup gap-y-5'>  <div><img src="Assets/logo.png" /></div>
      <div className="input-container">
        <label className='text-neutral-50'>Username </label>
        <input type="text" name="uname" required  className='input'/>
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label className='text-neutral-50'>Password </label>
        <input type="password" name="pass" required  className='input'/>
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <button type="submit" className='btn-solid'>Submit</button>
      </div>
      <div className="flex flex-row  items-center justify-center">
              <div>
                <img src="Assets/Applelogo.png" alt="" srcset="" />
              </div>
              <div>
                <img src="Assets/Googlelogo.png" alt="" srcset="" />
              </div>
            </div>
    </form>
  </div>
  )
  return (
    <div>
      
      {
        isSubmitted ? <NavLink to='/'>Home Page</NavLink> :renderForm
      }
      
    </div>
  )
}

export default Signin
