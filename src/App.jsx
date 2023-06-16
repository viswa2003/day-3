import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function App() {

  
  const [counter, setCounter] = useState(0)

  const increment = () =>{
    setCounter(counter+1);
  };

  const decrement = () =>{
    setCounter(counter-1);
  };


  return (
    <div>
      <Container className="mt-5 pt-5 text-center">
        

      
      <h1 className="text-center">Counter App</h1>
      
      <div className='border p-5 m-5' style={{}}>
        <h1>{counter}</h1>

      <div>
          <Button className="px-5 mx2" variant="danger" onClick={increment}>+</Button>{' '}
          {counter > 0 && (<Button className="px-5 mx2" variant="info" onClick={decrement}>-</Button>)}
          
      </div>

        </div>
     
      
    


      </Container>
    </div>
  )
}
