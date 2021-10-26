import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import HomeComponent from './component/HomeComponent';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();

function App() {
  return (   
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <HomeComponent/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
