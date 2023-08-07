
import { createStore } from '@reduxjs/toolkit';
import { Provider, connect } from 'react-redux';

const initialState = {
  currentValue: 0,
};

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

const add = (value) => ({ type: ADD, value });
const subtract = (value) => ({ type: SUBTRACT, value });

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        currentValue: state.currentValue + action.value,
      };
    case SUBTRACT:
      return {
        ...state,
        currentValue: state.currentValue - action.value,
      };
    default:
      return state;
  }
};

const store = createStore(calculatorReducer);

const Calculator = ({ currentValue, add, subtract }) => {
  const addNumbers = () => {
    const value = parseInt(prompt('Enter a number to add:'), 10);
    if (!isNaN(value)) {
      add(value);
    }
  };

  const subtractNumbers = () => {
    const value = parseInt(prompt('Enter a number to subtract:'), 10);
    if (!isNaN(value)) {
      subtract(value);
    }
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <p>Current Value: {currentValue}</p>
      <button onClick={addNumbers}>Add</button>
      <button onClick={subtractNumbers}>Subtract</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentValue: state.currentValue,
});

const mapDispatchToProps = {
  add,
  subtract,
};

export const ConnectedCalculator = connect(mapStateToProps, mapDispatchToProps)(Calculator);

