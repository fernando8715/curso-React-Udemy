import { useState } from 'react';

import { Button } from './components/Button';
import { About } from './components/About';
import { Product } from './components/Product';


import './css/App.css';

export const App = () => {

  const [count, setCount] = useState(0);

  const handleAdd = ()=> {
      setCount(count + 1);
  }

  const handleSub = ()=> {
      setCount(count - 1);
  }



  const logged = true; 
  
  return (
    <>
      <h1 className='text-center'>Welcome to my App</h1>
        {logged && <About/>}
        <h3>{count}</h3>
      <br />
        <Button count={count} onClick={handleAdd} name={'Add +1'}/>
      <br />
        <Button count={count} onClick={handleSub} name={'Sub -1'}/>
        <Product count={count}/>
    </>
  )
}
