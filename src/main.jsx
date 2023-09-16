import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx'
import Home from './components/Home'
// import About from './components/About'
import Search from './components/Search.jsx';
import './main.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Search />
    {/* <About /> */}
  </React.StrictMode>,
)
