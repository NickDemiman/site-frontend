import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Navbar} from './Components/Navbar/Navbar';

// import Home from './Pages/Home'
import Home from './Pages/Home'
import Organizers from './Pages/Organizers'
import CFP from './Pages/CFP'
import Program from './Pages/Program'
import Submission from './Pages/Submission'
import { Venue } from './Pages/Venue';
import {Registration} from './Pages/Registration'
import LastConf from './Pages/LastConf'
import NotFound from './Pages/NotFound'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './style'

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/org' element={<Organizers/>}/>
          <Route path='/cfp' element={<CFP/>}/>
          <Route path='/program' element={<Program/>}/>
          <Route path='/submission' element={<Submission/>}/>
          <Route path='/venue' element={<Venue/>}/>
          <Route path='/reg' element={<Registration/>}/>
          <Route path='/lastConf' element={<LastConf/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
