import React,{useContext,useState} from 'react';
import {store} from "./App";

const Display = () => {
    const[data, setData] = useContext(store);
    const[name, setname]= useState('')

    const handleSubmit = e => {
        e.preventDefault();
        const newData = [...data, { id: Date.now(), brandname: name }];
        setData(newData);
        setname(''); // Clearing input field after submission
    }
  return (
    <div>
       {data.map(item => (
                <div key={item.id}>{item.brandname}</div>
            ))}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your brand" onChange={(e)=>setname(e.target.ariaValueMin)} />
            <input type="submit" value="Add" />
        </form>
    </div>
  )
}

export default Display
