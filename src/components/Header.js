import React, {useState, useEffect} from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { logo } from '../utils/Contant';
import { userLogo } from '../utils/Contant';
const Header = () => {
  // const imagePath = require("../assets/UserIcon.png");
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user);
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === 'logout') {
      logout();
    }
  };
  const logout = () => {
    alert('Logging out...');
    signOut(auth).then(() => {
      console.log("user loged out");
    }).catch((error) => {
      console.log(error);
    });
  };
  useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, (user)=>{
      if(user){
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse");
      }else{
        dispatch(removeUser());
        navigate("/");
      }
    })
    return unSubscribe;
  }, []);
  
  return  (
    <div className='absolute px-8 w-full py-2 bg-gradient-to-b from-black z-50 flex justify-between'>
        <img className='w-44' src= {logo} />
        {isLogin?
        (<div className='flex p-2'>
            <img className='w-12 h-12 bg-black rounded-3xl' alt="UserIcon" src={userLogo}/>
            <select className='mt-5 bg-slate-400 w-12 h-6 ml-2' id="action-select" value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                <option value="profile">Profile</option>
                <option value="settings">Settings</option>
                <option value="logout">Logout</option>
            </select>
        </div>):""}
    </div>
  );
}

export default Header
