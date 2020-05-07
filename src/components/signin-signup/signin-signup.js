import React from 'react';
import './signin-signup.styles.scss';
import Signin from '../signin/signin';
import Signup from '../signup/signup';
const Signinsignup = () => {
  return(

        <div className='sign-in-and-sign-up'>
        <Signin />
        <Signup />
        </div>
  );
}
export default Signinsignup;
