import { useState } from 'react';
import './App.css';
import Select from 'react-select';
import { MyComponent } from './components/SelectTimes';




function App() {
const [mundial, setMundial] = useState<String>()


function hand(event:any): any{
  console.log(event);
  setMundial(`O Time ${event.value} ${event.mundial}`)
}

  return (
    <div className="App">
      <h1>Verifique qual time tem mundial.</h1>
      <div className='linha'>
        <MyComponent hand={hand} />
        <p className='p'>{mundial}</p>
      </div>
    </div>
  );
}

export default App;
