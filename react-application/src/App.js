import Header from "./components/Header";
import Home from "./views/Home";
import Folders from "./views/Folders";
import Folder from "./views/Folder";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/folders">
              <Folders />
            </Route>
            <Route exact path="/folders/:id">
              <Folder />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
