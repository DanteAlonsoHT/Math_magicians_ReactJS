import Calculator from './components/Calculator';
import { useState } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objCalculator: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState(
      {
        objCalculator: obj,
      },
    );
  }

  render() {
    const { objCalculator } = this.state;
    return (
      <body><Calculator updateState={this.updateState} objCalculator={objCalculator} /></body>
    );
  }
}

export default App;
