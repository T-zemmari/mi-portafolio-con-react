import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/Home/HomePage';
 import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    
    </div>
  );
}

