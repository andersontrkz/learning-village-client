import { Route, Switch } from 'react-router-dom';

import { Home } from '../components/Pages/Home';
import { Login } from '../components/Pages/Login';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
