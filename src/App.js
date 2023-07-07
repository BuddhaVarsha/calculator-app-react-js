import './App.css';
import {React, useState} from 'react'


function App() {

  const [total, setTotal] = useState('');

  const handleclick = (e) => {
    setTotal(total.concat(e.target.name));
  }

  const clear = () => {
    setTotal('');
  }

  const handledelete = () => {
    setTotal(total.slice(0, -1));
  }

  const calculate = () => {
    try{
      setTotal(eval(total).toString());
    }
    catch{
      setTotal('Error!');
    }
  }

  return (
    <div className="App">
      <h1>Calculator</h1>

      <div className="container">
        <form>
          <input type="text" value={total} />
        </form>

        <div className='keypad'>
          <button onClick={clear} id='clear' className='highlight'>AC</button>
          <button onClick={handledelete} className='highlight'>DEL</button>
          <button name='/' onClick={handleclick} className='highlight'>&divide;</button>
          <button name='7' onClick={handleclick}>7</button>
          <button name='8' onClick={handleclick}>8</button>
          <button name='9' onClick={handleclick}>9</button>
          <button name='*' onClick={handleclick} className='highlight'>&times;</button>
          <button name='4' onClick={handleclick}>4</button>
          <button name='5' onClick={handleclick}>5</button>
          <button name='6' onClick={handleclick}>6</button>
          <button name='-' onClick={handleclick} className='highlight'>-</button>
          <button name='1' onClick={handleclick}>1</button>
          <button name='2' onClick={handleclick}>2</button>
          <button name='3' onClick={handleclick}>3</button>
          <button name='+' onClick={handleclick} className='highlight'>+</button>
          <button name='0' onClick={handleclick}>0</button>
          <button name='.' onClick={handleclick}>.</button>
          <button id='equal' onClick={calculate} className='highlight'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
