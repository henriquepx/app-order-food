import PropTypes from 'prop-types';
import Input from '../../Ui/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Add</button>
    </form>
  );
};

MealItemForm.propTypes = {
    id: PropTypes.string.isRequired,
};

export default MealItemForm;
