import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import About from './Container/About/About';
import Header from './Container/Header/Header';
import Work from './Container/Work/Work';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Header/>
          <About/>
          <Work/>
     hello world
    </div>
  );
}

export default App;
