import { useState } from 'react'
import './App.css'
import { data } from './data'
import Clothes from './Clothes';
import Buttons from './Buttons';


function App() {

  const [clothes, setClothes] = useState(data);
  console.log(clothes)
  
   return (
    <>
      <Buttons />
      <Clothes itemsForSale={clothes} />      
    </>
  )
}

export default App
