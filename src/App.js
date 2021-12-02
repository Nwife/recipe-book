import { BrowserRouter, Switch, Route } from 'react-router-dom';

//page components
import Home from './page/home/Home';
import Create from './page/home/Home';
import Search from './page/home/Home';
import Recipe from './page/home/Home';

//styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
