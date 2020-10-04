import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import './App.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  

  constructor(props){
    super(props);

    this.state  = {
      dishes: DISHES
    };
  }
render(){
  return (
    <Provider store = {store}>
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
    </Provider>
  );
}
  
}

export default App;
