
import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string,
    defaultValue: PropTypes.string,
  }).isRequired,
};

export default Input;
