import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase';
import {connect} from 'react-redux';
import Cartitem from '../cart-icon/cart-icon';
import Cartdropdown from '../cart-dropdown/cart-dropdown';
const Header = ({currentuser,hidden}) => {
  return(

      <div className='header'>
      <div className='logo-container'>
      </div>
      <div className='options'>
            <Link  className='option' to='/shop'>SHOP</Link>
            <Link  className='option' to='/contacts'>CONTACT</Link>
            {
              currentuser ?
               <div className='option'onClick={ () => {auth.signOut()}}>
                 SIGN-OUT
               </div>//checks if currentuser has null or not
               :
               <Link to='/signin' className='option'>SIGN-IN</Link>
            }
            <Cartitem />
      </div>
      {hidden ? null:
      <Cartdropdown />
      }
    </div>
  );
}

const mapStateToProps= (state)=> ({
  currentuser:state.user.currentuser,
  hidden:state.cart.hidden
})

export default connect(mapStateToProps)(Header);
