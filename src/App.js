import video from './Reyes Luxury Cars.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
    
       <video  src={video}  className='video-bag'  autoPlay muted loop controls />
     <div className="bg-over"></div>
    <div className="navbar">
      <div className="nav-menu">
        <div></div>
        <div></div>
        <div></div>
        
      </div>
    </div>
    <div className="home-text">
      <h1>Reyes Luxury Cars</h1>
      <p>Popping Your Rides</p>
    </div>
    </div>   
  );
}

export default App;
