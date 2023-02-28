import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from "./components/header/header";
import Mainpages from "./components/mainpages/pagess";
import Footer from "./components/footer/footer";

function App() {


  return (
    <DataProvider>
      <Router>
        <div className="App">
        <Header/>
          <div className="container">
            <Mainpages/>
          </div>
          <Footer/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
