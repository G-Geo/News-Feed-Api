import FrontPage from './Components/FrontPage/FrontPage'
import './App.css'
import logo from "./logo.svg"

function App() {
  return (
 
    <div className="App">

      <header className="FrontPageHeader">
        <img src={logo} className="logo" alt="Logo"></img>
        <h1 className="SearchText">Search Hacker News</h1>
      </header>

 
      <FrontPage></FrontPage>
    
    </div>
  );
}

export default App;
