// import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Banner from './Component/Banner/Banner';
import Card from './Component/Card/Card';
import {Orginals, Comedy, Action } from './Static/Urls';
function App() {
  let image="https://userscontent2.emaze.com/images/64a1e94d-034d-4fa7-a734-d3da25aa8c6b/c56f9882ed89b77e02b6d763d15b882a.jpg"
  
  return (
    <div className="App">
      <NavBar pic={image}/>
       <Banner /> 
       <Card title="Netflix Orginals" url={Orginals}/>
       <Card title="Comedy Movies" url={Comedy} small/>
       <Card title="Action" url={Action} small/>
    </div>
  );
}

export default App;
