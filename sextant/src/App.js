
import './App.css';
import Banner from './components/Banner';
import Connector from './components/Connector';
import Exhibit from './components/Exhibit';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant"/>
      <section className='data-set'>
      <Exhibit heading="IPv4 address">
      <ShowData url='https://api.ipify.org?format=json'/>
      </Exhibit>
      <Exhibit heading="IPv6 address">
      <ShowData url='https://api64.ipify.org?format=json'/>
      </Exhibit>
      <Exhibit heading="Pylon packet latency">
      <Connector/>
      </Exhibit>
      </section>
      
    </div>
  );
}

export default App;
