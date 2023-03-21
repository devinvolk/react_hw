import './App.css';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Signup/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;