import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import './App.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props);

    this.state  = {
      dishes: DISHES
    };
  }
render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      
    </div>
  );
}
  
}

export default App;
