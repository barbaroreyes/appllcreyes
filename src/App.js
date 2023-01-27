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
      <div className="home-text">
        <h1>Popping Your Rides</h1>
      
    </div>
    </div>
    <h2>Call Now 737-781-9878</h2>
    </div>   
  );
}

export default App;
