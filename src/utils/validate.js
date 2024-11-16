export const checkValidate = (name, email, password) => {
    
    if(name){
        const isNameValid = /^[a-zA-Z\s]{2,}$/.test(name.current.value);
        if (!isNameValid) return "Name is not valid";
    }
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.current.value);
   
    // Password validation remains the same
    const isPasswordValid = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,}$/g.test(password.current.value);    
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    
    return null;
}
