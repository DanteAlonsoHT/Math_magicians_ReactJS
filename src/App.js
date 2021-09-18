import Calculator from './components/Calculator';
import { useState } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => {
  const [objCalculator, setObt] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const updateState = (obj) => {
    setObt(obj);
  };

  render() {
    const { objCalculator } = this.state;
    return (
      <body><Calculator updateState={this.updateState} objCalculator={objCalculator} /></body>
    );
  }
}

export default App;
