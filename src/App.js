import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import './App.css';
import Main from './components/Main';

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
      <Main />
    </div>
  );
}
  
}

export default App;
