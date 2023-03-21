import { suppliesArray } from '../../../../../backend/supplies';
import { pods } from '../../../../../backend/pods';
import { useState } from 'react';

function Allocate( ) {

  const [allocation, setAllocation] = useState({
    resource: '',
    quantity: 0,
    destination: '',
  });

  console.log(suppliesArray)
  console.log(allocation)
  
  return (
    <form>
      <label>
        Resource
        <select onChange={(e) => setAllocation({...allocation, resource: e.target.value})} >
            <option >Resource</option>
            {suppliesArray.map((supply) => <option >{supply.name}</option>)}
        </select>
      </label>
      <label >
        Quantity
        <input type='number' min='1' max={suppliesArray.filter((supply) => supply.name === allocation.resource)[0]?.value} />
      </label>
      <label >
        Destination
        <select >
            <option >Destination</option>
            {pods.map((pod) => <option >{pod.name}</option>)}
        </select>
      </label>
      <button type='submit' >Send</button>
    </form>
  );
}

export default Allocate;
