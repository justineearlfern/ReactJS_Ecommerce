import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';


/*import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'; */


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
       <div className='cart-items'> 
      {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
    </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown); 
