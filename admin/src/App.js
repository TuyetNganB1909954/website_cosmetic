import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from "./components/header/header";
import Mainpages from "./components/mainpages/pagess";
import Footer from "./components/footer/footer";
import SlideMenu from "./components/slideMenu/slideMenu";
import './App.css'
function App() {


  return (
    <DataProvider>
    <Router>
      <div className="App">
        
        <div class="row">
          <div class="column-slide" >
            <SlideMenu/>
          </div>
          <div class="column-main">
            <Header/>
            <Mainpages/>
          </div>
        </div>
        <Footer/>

      </div>
  </Router>
    </DataProvider>
  );
}

export default App;
