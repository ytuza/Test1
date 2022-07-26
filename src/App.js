import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
import videoBg from '../src/image360/videoBg.mp4';
import { width } from '@mui/system';

function App() {

  return (
    <DataProvider>
      <video style={{
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }} src={videoBg} autoPlay loop muted />
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
