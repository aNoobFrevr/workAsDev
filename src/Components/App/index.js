//import logo from '../../logo.svg';
import Eagle from '../../eagle2.jpg'
import './App.css';

function App() {
  return (
    <div className= "Page">
      <div className = "header">
        <div className ="appBar">
        <div className = "logo">
          {`</>`}
        </div>
        </div>
        
        {/**initialy its only going to be a page */
          <div className = "Navigation" style={{display:'none'}}>
          Navigation
        </div>
        }
      </div>
      <div className = "Article" >
        <div className = "firstFold">
         <div className= "headerImage">
          <img src={Eagle} alt="React Logo" />
          </div>
          <h2>
            Creating a WebComponent
          </h2> 
        </div>

        <div className = "belowFold">
          Below Fold
      </div>
      </div>
    </div>
  );
}

export default App;
