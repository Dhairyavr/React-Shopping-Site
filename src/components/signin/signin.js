import React from 'react';
import './signin.styles.scss';
import Forminput from '../form-input/form-input';
import Button from '../button/button';
import {signinwithgoogle,auth} from '../../firebase/firebase';
class Signin extends React.Component{
  constructor() {
    super();

    this.state={
      email:'',
      password:''
    }

  }

handleSubmit= async (event) =>{

  event.preventDefault();//stops all other events and starts this one
  const {email,password}=this.state;
  try{
    await auth.signInWithEmailAndPassword(email,password);
    console.log(email,password);
    this.setState({email:'',password:''});
  }
  catch(error)
  {
    console.log(error);
  }

}

handlechange = (event) => {
  this.setState({[event.target.name]:event.target.value});
}

  render() {
    return(

      <div className='sign-in'>
      <h1 className='title'>I already have an account</h1>
      <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>

            <Forminput
            name='email'
            type='email'
            handlechange={this.handlechange}
            label='email'
            value={this.state.email}
            required
            />
            <Forminput
            name='password'
            type='password'
            label='password'
            handlechange={this.handlechange}
            value={this.state.password}
            required
            />
                <div className='buttons'>
                <Button type='submit'>Sign-in</Button>
                <Button onClick={signinwithgoogle} isGoogleSignIn>Sign-in With Google</Button>
                </div>
            </form>
      </div>

    );
  }
}
export default Signin;
