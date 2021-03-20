import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Route path="/" render={() => <Home/>}/>
      <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
