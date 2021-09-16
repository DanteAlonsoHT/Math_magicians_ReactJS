import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calculator-content">
        <p className="quantity-field">10</p>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light">AC</button>
          <button type="button" className="btn btn-gray-light">+/-</button>
          <button type="button" className="btn btn-gray-light">%</button>
          <button type="button" className="btn btn-orange">÷</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light">7</button>
          <button type="button" className="btn btn-gray-light">8</button>
          <button type="button" className="btn btn-gray-light">9</button>
          <button type="button" className="btn btn-orange">X</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light">4</button>
          <button type="button" className="btn btn-gray-light">5</button>
          <button type="button" className="btn btn-gray-light">6</button>
          <button type="button" className="btn btn-orange">-</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="btn btn-gray-light">1</button>
          <button type="button" className="btn btn-gray-light">2</button>
          <button type="button" className="btn btn-gray-light">3</button>
          <button type="button" className="btn btn-orange">+</button>
        </div>
        <div className="row-buttons">
          <button type="button" className="big-btn btn-gray-light">0</button>
          <button type="button" className="btn btn-gray-light">.</button>
          <button type="button" className="btn btn-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
