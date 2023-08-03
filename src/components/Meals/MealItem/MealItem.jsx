import classes from './MealItem.module.css';
import PropTypes from 'prop-types';

const MealItem = props => {
const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>

        </div>
    </li>
  )
}

MealItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // Adicione outras validações de propriedades aqui, se necessário
};

export default MealItem