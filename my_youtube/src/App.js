import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header count = {1}/>
      <Header count = {2}/>
      <Footer/>
    </div>
  );
}

export default App;
