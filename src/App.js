import { useState } from 'react';
import { Switch, Route } from 'react-router';
import Calculator from './components/Calculator';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';
import Home from './pages/Home';

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
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator updateState={updateState} objCalculator={objCalculator} />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="/*">
          <NotMatch />
        </Route>
      </Switch>
    </body>
  );
};

export default App;
