import { Route, Switch } from 'react-router-dom';

import { Home } from '../components/Pages/Home';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};
