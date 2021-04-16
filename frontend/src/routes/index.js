import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Cursos from '../pages/Cursos';
import Curso from '../pages/Curso';
import Asignatura from '../pages/Asignatura';
import TestPage from '../pages/TestPage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';

import ScrollToTop from 'react-router-scroll-top';

export const Routes = () => (
  <BrowserRouter>
    <ScrollToTop>
      <div className="App">

        <Header/>

        <main className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cursos" component={Cursos} />
            <Route path="/curso/:id" component={Curso} />
            <Route path="/asignatura/:id" component={Asignatura} />
            <Route path="/test" component={TestPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/recoverpassword" component={PasswordRecovery} />
          </Switch>
        </main> 

      </div>
    </ScrollToTop>
  </BrowserRouter>
);