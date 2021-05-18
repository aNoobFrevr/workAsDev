import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
    <div className= "Page">
      <div className = "header">
        <div className ="appBar">
        <div className = "logo">
          logo
        </div>
        </div>
        
        <div className = "Navigation">
          Navigation
        </div>
      </div>
      <div className = "Article" >
        <div className = "firstFold">
          <div className = "articleHeader">
            Creating a WebComponent
          </div>
         
          <img src={logo} alt="React Logo" />
          
        </div>
        <div className = "belowFold">
          Below Fold
      </div>
      </div>
    </div>
  );
}

export default App;
