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
      <h2>Popping Your Rides</h2>
      <div className="home-text">
        <h1> </h1>
      
    </div>
    </div>
    <footer>
    
    <div className="home-btn"><p>Book Now</p></div>
    </footer>
    </div>   
  );
}

export default App;
