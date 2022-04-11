import './App.css';
import Floor from './components/Floor/Floor';
import Legend from './components/Legend/Legend';

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(/images/floor.jpg)" }}>
      <div className='title'>Restaurant Floor</div>
      <div className='legends'>      
        <Legend color='lightgreen' label='Available Seat' />
        <Legend color='#DC143C' label='Occuped Seat' />
        <Legend color='orange' label='About to leave' />
      </div>

      <Floor />
    </div>
  );
}

export default App;