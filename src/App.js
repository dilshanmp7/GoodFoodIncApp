import React from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from "./Actions/store"
import {Provider} from "react-redux"
import Ingredient from "./Components/Ingredient"
import {Container} from "@material-ui/core"


function App() {
  return (
   <Provider store={store}>
     <Container maxWidth="lg">
     <Ingredient></Ingredient>
     </Container> 
   </Provider>
  );
}

export default App;
