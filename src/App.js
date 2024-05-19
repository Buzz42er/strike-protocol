import './App.css';
import Hero from './components/sections/Hero';
import Nav from './components/sections/Nav';
import Playstyles from './components/sections/Playstyles';
import Gallery from './components/sections/Gallery';
import Footer from './components/sections/Footer';
import GameInfo from './components/sections/GameInfo';
import Rewards from './components/sections/Rewards';
import Partners from './components/sections/Partners';
import TheProject from './components/sections/TheProject';
import FAQ from './components/sections/FAQ';
import HowToPlay from './components/sections/HowToPlay';
import Token from './components/sections/Token';

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
        <TheProject className="TheProject"/>
        <Playstyles className="Playstyles"/>
        <Rewards className="Rewards"/>
        <FAQ className='FAQ'/>
        <HowToPlay className='HowToPlay'/>
        <Token className='Token'/>
        <Gallery className="Gallery"/>
        <Partners className="Partners"/>
        
      <footer>
        <Footer className="Footer"/>  
      </footer>
    </div>
  );
}

export default App;
