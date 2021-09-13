import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import About from './components/About'
import Home from './components/Home'
import Personal from './components/Personal'
import School from './components/School'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/school" component={School} />
          <Route exact path="/personal" component={Personal} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
