import { Route, Switch } from 'react-router-dom';

import { Feed } from '../components/Pages/Feed';
// import { Home } from '../components/Pages/Home';
import { Login } from '../components/Pages/Login';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/feed" component={Feed} />
      <Route path="/" component={Login} />
    </Switch>
  );
};
