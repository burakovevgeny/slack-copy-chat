import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './pages/Main';
import SignIn from './containers/pages/SignIn';
import './tailwind.output.css';

const App = () => {
  const { isAuthenticated } = useSelector((store) => store.authorization);
  return (
    <BrowserRouter>
      <Switch>
        {isAuthenticated ? (
          <>
            <Redirect to="/" />
            <Route exact path="/" component={Main} />
          </>
        ) : (
          <>
            <Redirect to="/sign-in" />
            <Route path="/sign-in" component={SignIn} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
