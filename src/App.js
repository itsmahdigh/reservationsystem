
import './App.css';
import LandingPage from './pages/LandingPage';
import Login from './Component/Login/login';
import SignUp from './Component/Login/signup';
import{Route,Routes,BrowserRouter, Outlet} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
function App() {
  return (
    <div className='App'>
  <BrowserRouter>
    <Routes>
          <Route path='/' element={<LandingPage/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/detail' element={<DetailPage />} />

    </Routes>
    <Outlet/>
  </BrowserRouter>
    </div>
  );
}

export default App;
