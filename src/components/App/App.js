import React, { useEffect, useState } from 'react';
import './App.css';
import { getList } from '../../services/list';

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])
  return(
    <div className="wrapper">
     <h1>My Grocery Lists</h1>
     <ul>
       {list.map(item => <li key={item.item}>{item.item}</li>)}
     </ul>
   </div>
  )
}

export default App;