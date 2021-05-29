import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';



// This is APP Component 
function App() {
  return (
    <div >
      {/* <Header></Header> */}
      <Header/>
      <Shop/>  
      {/* control + Space Bar er maddhome import korlam */}
      {/* auto import Extension thakle .. <Shop likhe tab dileo auto import hoye jabe  */}

      {/* ekhon kaj hocche fake data gula load kora   Shop.js er moddhe kaj korbo ..*/}

      
    </div>
  );
}

export default App;
