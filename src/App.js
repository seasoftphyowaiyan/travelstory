import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import HomePage from './pages/homePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;