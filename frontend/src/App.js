import './styles/App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Cursos from './components/Cursos';
import Curso from './components/Curso';
import Asignatura from './components/Asignatura';
import TestPage from './components/TestPage';
import Register from './components/Register';
import Login from './components/Login';
import PasswordRecovery from './components/PasswordRecovery';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import { ApollloProvider } from '@apollo/client';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Header/>
          <main className="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cursos" component={Cursos} />
              <Route path="/curso" component={Curso} />
              <Route path="/asignatura" component={Asignatura} />
              <Route path="/test" component={TestPage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/recoverpassword" component={PasswordRecovery} />
            </Switch>
          </main> 

        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
