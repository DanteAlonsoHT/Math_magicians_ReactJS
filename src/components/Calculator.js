import PropTypes from 'prop-types';
import calculate from '../logic/calculator';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = (props) => {
  let { objCalculator } = props;

  const calculatorButton = (obj, button) => {
    const { updateState } = this.props;
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

  render() {
    const { objCalculator } = this.props;
    return (
      <div className="calculator-content">
        <p className="quantity-field">
          { this.showResult() }
        </p>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, 'AC'); }}>AC</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '+/-'); }}>+/-</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '%'); }}>%</button>
          <button type="button" className="btn btn-orange" onClick={() => { this.calculate(objCalculator, '÷'); }}>÷</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '7'); }}>7</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '8'); }}>8</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '9'); }}>9</button>
          <button type="button" className="btn btn-orange" onClick={() => { this.calculate(objCalculator, 'x'); }}>x</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '4'); }}>4</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '5'); }}>5</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '6'); }}>6</button>
          <button type="button" className="btn btn-orange" onClick={() => { this.calculate(objCalculator, '-'); }}>-</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '1'); }}>1</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '2'); }}>2</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '3'); }}>3</button>
          <button type="button" className="btn btn-orange" onClick={() => { this.calculate(objCalculator, '+'); }}>+</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="big-btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '0'); }}>0</button>
          <button type="button" className="btn btn-gray-light" onClick={() => { this.calculate(objCalculator, '.'); }}>.</button>
          <button type="button" className="btn btn-orange" onClick={() => { this.calculate(objCalculator, '='); }}>=</button>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  objCalculator: PropTypes.instanceOf(Object).isRequired,
};

export default Calculator;
