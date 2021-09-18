import { useState } from 'react';
import Calculator from './components/Calculator';

const App = () => {
  const [objCalculator, setObt] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const updateState = (obj) => {
    setObt(obj);
  };

  return (
    <body>
      <Calculator updateState={updateState} objCalculator={objCalculator} />
    </body>
  );
};

export default App;
