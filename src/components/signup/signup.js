import React from 'react';
import Forminput from '../form-input/form-input';
import Button from '../button/button';
import {auth,firebaseuserprofile} from '../../firebase/firebase';
import './signup.styles.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      displayName:'',
      email:'',
      password:'',
      confirmpassword:''
    };

  }
  handlechange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit =async (event) => {
    event.preventDefault();
    const {displayName}=this.state;
    if(this.state.password!==this.state.confirmpassword)
    {
    alert("Passwords dont match");
    return;
    }
    try{
      const {user}=await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);
      user.updateProfile({
    displayName: this.state.displayName})
      await firebaseuserprofile(user,{displayName});
      console.log({displayName},this.state.email);

      this.setState({displayName:'',
      email:'',
      password:'',
      confirmpassword:''});

    }
    catch(error)
    {console.log(error);}

  }

  render() {
    return(
      <>
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} >

          <Forminput
          name='displayName'
          type='text'
          handlechange={this.handlechange}
          label='displayName'
          value={this.state.displayName}
          required
          />
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
          label='Password'
          handlechange={this.handlechange}
          value={this.state.password}
          required
          />
          <Forminput
          name='confirmpassword'
          type='password'
          label='Confirm password'
          handlechange={this.handlechange}
          value={this.state.confirmpassword}
          required
          />
        <Button type='submit'>Sign-up</Button>

        </form>
      </div>
      </>
    );
  }
}
export default Signup;
