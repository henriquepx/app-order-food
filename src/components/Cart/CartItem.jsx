import classes from './CartItem.module.css';
import PropTypes from 'prop-types';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  onAdd: PropTypes.func.isRequired, 
  onRemove: PropTypes.func.isRequired, 
  amount: PropTypes.number.isRequired, 
  name: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired,
};

export default CartItem;