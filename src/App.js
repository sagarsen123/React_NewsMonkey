
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <News MaxNewsPerPage={21} Currcountry='in' Currcategory='sport'/>
    </div>
  );
}

export default App; 
