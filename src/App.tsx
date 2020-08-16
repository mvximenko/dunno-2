import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';
import Title from './components/Title';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/movies'>
        <Movies />
      </Route>
      <Route exact path='/series'>
        <Series />
      </Route>
      <Route exact path='/movies/:titleId'>
        <Title />
      </Route>
      <Route exact path='/series/:titleId'>
        <Title />
      </Route>
      <Route exact path='/signin'>
        <SignIn />
      </Route>
      <Route exact path='/signup'>
        <SignUp />
      </Route>
    </Switch>
  </>
);

export default App;
