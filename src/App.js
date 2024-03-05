import Count from "./Count.jsx";
import Display from "./Display.jsx";
import React,{createContext,useState} from "react";
import './App.css';

export const store = createContext()

function App() {
  const[data, setData] = useState([
    {
      brandname: 'nokia'
    },
    {
      brandname: 'realme'
    },
    {
      brandname: "mi"
    }
  ])
  return (
  <div className="App">
    <store.Provider value={[data,setData]}>
    <Count />
    <Display />
  
    </store.Provider>
    
    </div>
  );
}

export default App;
