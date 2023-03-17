
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route    path='/' element={<News key={'general'}  MaxNewsPerPage={21} Currcountry='in' Currcategory='general'/>}/>
            <Route   path='/sports' element={<News key={"sports"}   MaxNewsPerPage={21} Currcountry='in' Currcategory='sports'/>}/>
            <Route    path='/entertainment' element={<News key={"entertainment"}  MaxNewsPerPage={21} Currcountry='in' Currcategory='entertainment'/>}/>
            <Route   path='/business' element={<News  key={"business"} MaxNewsPerPage={21} Currcountry='in' Currcategory='business'/>}/>
            <Route   path='/technology' element={<News  key={"technology"} MaxNewsPerPage={21} Currcountry='in' Currcategory='technology'/>}/>
            <Route   path='/science' element={<News  key={"science"} MaxNewsPerPage={21} Currcountry='in' Currcategory='science'/>}/>
            <Route   path='/health' element={<News  key={"health"}  MaxNewsPerPage={21} Currcountry='in' Currcategory='health'/>}/>
          </Routes>
            
          </Router>
      {/* <Navbar/>
        <News  MaxNewsPerPage={21} Currcountry='in' Currcategory='science'/> */}

    </div>
  );
}

export default App; 


    {/* <li className="nav-item">
                <Link className="nav-link" href="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/sciences">
                  Sciences
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/technology">
                  Technology
                </Link>
              </li> */}