import React, {useState, useRef} from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { userLogo } from '../utils/Contant';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const toggleSignInForm = ()=>{
    setErrorMessage("");
    setSignInForm(!isSignInForm);
  }
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = ()=>{
     const mess = checkValidate(!isSignInForm?name:null, email, password);
     if(mess){
       setErrorMessage(mess);
       return;
     }
     if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        updateProfile(user, {
          displayName:name.current.value,
          photoURL:userLogo
        }).then(()=>{
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            })
          )
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode +"   "+errorMessage);
        setErrorMessage(errorCode +"   "+errorMessage);
      });
     }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => { 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode +"  "+errorMessage);
        });
     }
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"
                alt="logo"
            />
      </div>
      <form 
        onSubmit={(e)=>e.preventDefault()}
        className='w-3/12 absolute p-12 bg-gray-950 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className='p-2 my-3 w-full bg-gray-700'/>}
            <input ref={email} type="text" placeholder="Email Address" className='p-2 my-3 w-full bg-gray-700'/>
            <input ref ={password} type="password" placeholder="Password" className='p-2 my-3 w-full bg-gray-700 border-white'/>
            <p className='text-red-600 font-bold'>{errorMessage}</p>
            <button 
              className='p-2 my-6 bg-red-700 w-full rounded-lg'
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In":"Sign Up"}
            </button>
            <p className='py-4' onClick={toggleSignInForm}>{isSignInForm?"New to Netfix? Sign Up Now":"Already registered? Sign In Now"}</p>
       </form>
    </div>
  )
}

export default Login;
