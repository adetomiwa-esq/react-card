import logo from './logo.svg';
import './App.css';
import Info from './Info';
import About from './about';
import Socials from './socials';


function App() {
  return (
    <div className="App">
      <div className='business-card'>
        <Info />
        <About />
        <Socials/>
      </div>
    </div>
  );
}

export default App;
