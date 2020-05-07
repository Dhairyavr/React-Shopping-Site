import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import {Route,Switch,Redirect} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import {connect} from 'react-redux';
import {setcurrentuser} from './redux/user/user-action';
import Signinsignup from './components/signin-signup/signin-signup';
import {auth,firebaseuserprofile} from './firebase/firebase';
import Checkoutpage from './components/checkout/checkout';



class App extends React.Component {

    /*constructor(){
      super();
      this.state={
        currentuser:null
      }
    }*/

  unsubscribeFromauth = null

    componentDidMount() {
    this.unsubscribeFromauth = auth.onAuthStateChanged(async user => { //to check sign in or sign out from user
    if(user) {
    const usercheck= await firebaseuserprofile(user);

    usercheck.onSnapshot(snapShot => {
       this.props.setcurrentuser({
        currentuser:{
                    id:snapShot.id,
                    ...snapShot.data()
          }
        });//user-action reducer

                                });
              }
              this.props.setcurrentuser(user);
      });                                //it will return current authorized user from firebase

    }

    componentWillUnmount() {
      this.unsubscribeFromauth();
    }

        render() {
        return (
          <div className="App">
          <Header  />
          <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  path='/shop' component={Shop} />
          <Route exact path='/signin' render={ () => this.props.currentuser ? (<Redirect to='/' />) : (<Signinsignup />)} />
          <Route exact path='/checkout' component={Checkoutpage} />

          </Switch>
          </div>
        );
      }
}

const mapStateToProps= ({user})=> ({
  currentuser:user.currentuser
})

const mapDispatchToProps = (dispatch) =>({
  setcurrentuser:user=> dispatch(setcurrentuser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
