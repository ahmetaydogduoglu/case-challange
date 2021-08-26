import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//layout
import Layout from './layout';
//pages
import HomePage from './pages/home';
import AddLink from './pages/addLink';
import NotFound from './pages/notFound';

//styles 
import './App.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/addLink" component={AddLink} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
