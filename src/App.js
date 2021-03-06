import { Component } from 'react'

import FrontPage from './Components/FrontPage/FrontPage'

import './App.css'
import logo from "./logo.svg"

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      //You can change what is loaded on the page by changing the loadedPage state
      loadedPage: <FrontPage></FrontPage>,
      searchbar: ""
    }
  }

  render (){
  return (
 
    <div className="App">

      <header className="FrontPageHeader">
        <img src={logo} className="logo" alt="Logo"></img>
        <h1 className="SearchText">Search Hacker News</h1>
        <div>
          <input className="searchbar" type="search" placeholder="Search stories by title, url or author"></input>
        </div>
      </header>

{/* this is where you change what is currently loaded */}
      <div>{this.state.loadedPage}</div>
    
    </div>
  );
}
}

export default App;
