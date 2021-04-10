import Navbar from './Components/Navbar/Navbar'
import Home from './Containers/Home/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddArticles from './Containers/AddArticles/AddArticles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={ AddArticles }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
