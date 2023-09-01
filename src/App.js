import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Demo from './components/Demo';

function App() {
  return (
    <>
      <Router>

        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
