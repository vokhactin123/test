import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./component/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
          {/* <Route path="/Login">
            <Login />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
