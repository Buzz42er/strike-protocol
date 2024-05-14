import './App.css';
import Hero from './components/sections/Hero';
import Nav from './components/sections/Nav';
import Playstyles from './components/sections/Playstyles';
import Gallery from './components/sections/Gallery';
import Footer from './components/sections/Footer';
import GameInfo from './components/sections/GameInfo';
import Rewards from './components/sections/Rewards';
import Partners from './components/sections/Partners';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prep <code>forx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://strike-protocol.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Strike Protocol
        </a> */}

        <Nav/>
      </header>
      
        < Hero className="Hero"/>
        <GameInfo className="GameInfo"/>
        <Rewards className="Rewards"/>
        <Playstyles className="Playstyles"/>
        <Gallery className="Gallery"/>
        <Partners className="Partners"/>
        
      <footer>
        <Footer className="Footer"/>  
      </footer>
    </div>
  );
}

export default App;
