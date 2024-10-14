
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log("dummy");
    alert(`Count: ${count}`);
  });
  return (
    <div >
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
