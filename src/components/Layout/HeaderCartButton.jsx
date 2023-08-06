import PropTypes from 'prop-types';
import { useContext } from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/Cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const number0fCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{number0fCartItems}</span>
    </button>
  );
};

HeaderCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeaderCartButton;