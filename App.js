import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/Recommended/Recommended';

function App() {
  return (
    <div className="App">
      <div className="app_mainpage">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={
              <>
                <Header/>
                <div className='app__mainpage'>
                  <Sidebar/>
                  <RecommendedVideos/>
                </div>
              </>
              }/>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
