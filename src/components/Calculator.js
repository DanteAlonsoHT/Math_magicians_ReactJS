import PropTypes from 'prop-types';
import calculate from '../logic/calculator';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = (props) => {
  let { objCalculator } = props;

  const calculatorButton = (obj, button) => {
    const { updateState } = props;
    let newObj;
    try {
      newObj = calculate(obj, button);
    } catch {
      newObj = {
        total: 'Error: Something was wrong',
      };
    }
    objCalculator = newObj;
    updateState(newObj);
  };

  const showResult = () => {
    const { total, next, operation } = objCalculator;
    let result = null;

    if (total === null && next === null) {
      result = 0;
    } else if (next !== null && total === null) {
      result = next;
    } else if (next !== null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation} ${next}`;
      } else {
        result = total;
      }
    } else if (next === null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation}`;
      } else {
        result = total;
      }
    }

    return result;
  };

  return (
    <div className="section-content">
      <div className="title-calculator">
        <h4>Lets do some math!</h4>
      </div>
      <div className="calculator-content">
        <p className="quantity-field" data-testid="math-result">
          {showResult()}
        </p>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, 'AC'); }}>AC</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '+/-'); }}>+/-</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '%'); }}>%</button>
          <button type="button" className="btn btn-orange" onClick={() => { calculatorButton(objCalculator, '÷'); }}>÷</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '7'); }}>7</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '8'); }}>8</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '9'); }}>9</button>
          <button type="button" className="btn btn-orange" onClick={() => { calculatorButton(objCalculator, 'x'); }}>x</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '4'); }}>4</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '5'); }}>5</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '6'); }}>6</button>
          <button type="button" className="btn btn-orange" onClick={() => { calculatorButton(objCalculator, '-'); }}>-</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '1'); }}>1</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '2'); }}>2</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '3'); }}>3</button>
          <button type="button" className="btn btn-orange" onClick={() => { calculatorButton(objCalculator, '+'); }}>+</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="big-btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '0'); }}>0</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { calculatorButton(objCalculator, '.'); }}>.</button>
          <button type="button" className="btn btn-orange" onClick={() => { calculatorButton(objCalculator, '='); }}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
