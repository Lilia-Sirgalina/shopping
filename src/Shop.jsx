import { useState } from 'react'
import './App.css'
import { data } from './data'
import Clothes from './Clothes';
import Buttons from './Buttons';

function Shop() {

  const [clothes, setClothes] = useState(data);
  
  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes)
  }
  
   return (
    <>    
    <div className='cont'>
      <h2 className='back'>Free Standard Shipping</h2>
    </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes itemsForSale={clothes} />      
    </>
  )
}

export default Shop