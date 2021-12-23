import logo from "./logo.svg";
import "./App.css";

import Layout1 from "./components/Layout1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/layout/header/About";

function App() {
  return (
    <div className="App">
      

      <Layout1></Layout1>
    </div>
  );
}

export default App;
