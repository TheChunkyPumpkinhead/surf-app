import { Route,Link} from 'react-router-dom';
import './App.css';
import JotzFolder from './JotzFolder/JotzFolder';
import JotzForm from './JotzForm/JotzForm';
import LandingPage from "./LandingPage/LandingPage";
import SignUp from './SignUp/SignUp';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <nav>
          <ul>
            
          <li>
            <Link to="/">home</Link>
            </li>
            <li>
            <Link to="/add">Add</Link>
            </li>
            <li>
            <Link to="/list">list</Link>
            </li>
            <li>
            <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      
      </header>
  
      <main>
        <Route path ="/" exact component ={LandingPage} /> 
        <Route path="/contact" component={SignUp} />
        <Route path="/add" component={JotzForm} />
        <Route path="/list" component={JotzFolder} /> 


         </main>
    </div>
  );
}

export default App;
