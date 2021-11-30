import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SessionsPage from '../SessionsPage';
import GetToKnowUsPage from '../GetToKnowUsPage';
import NotFoundPage from '../NotFoundPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sessions">
     <SessionsPage />
          </Route>
          <Route path="/getToKnowUs">
     <GetToKnowUsPage />
          </Route>
          <Route path="*">
     <Home />
          </Route>
        </Switch>
      </div>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
