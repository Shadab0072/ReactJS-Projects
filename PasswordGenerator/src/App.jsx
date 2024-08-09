import { useEffect, useState } from 'react'
import './App.css'
import img from './assets/photo.png'

function App() {

const [password,setPassword] = useState('');
const [length,setLength] = useState(6);
const [numAllow,setNumAllow] = useState(false);
const [charAllow,setCharAllow] = useState(false);


const passwordGenerator=()=>{
 let pass = "";
 let str = "ABCDEFGqrstuvwxyz"

        if (numAllow) {
          str += "0123456789"
        }

        if(charAllow){
          str += "!@#$%^&*?><"
        }

      for (let i = 1; i <= length; i++) {
        const char = Math.floor(Math.random()* str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass)

}


useEffect(()=>{
  passwordGenerator();
},[length,numAllow,charAllow])



  return (
    <>
 <div className="container">

<div className="box-1">
    <h1>Password Generator</h1>
    <p>You can create difficult passwords here</p>
    <img src={img} alt="" />
 </div>
   
<div className="box-2">
      
        <input type="text" 
          value={password} 
          readOnly />


        <button onClick={() =>navigator.clipboard.writeText(password)}>COPY</button>
    


     
      <input type="range" 
        min={6}
        max={30}
        value={length} 
        onChange={(e)=>{ setLength(e.target.value)
        }}
      />
      <label htmlFor="">Length: {length} </label> 


      

      <div class="checkbox-wrapper-1">
  <input  className="substituted" type="checkbox" aria-hidden="true" 
        defaultChecked={numAllow} 
       onChange={()=>{ setNumAllow((prev)=>!prev)
        }}
        />
  <label for="example-1">Numbers</label>
      </div>



      <div class="checkbox-wrapper-1">
      <input className="substituted" type="checkbox" aria-hidden="true" 
        defaultChecked={charAllow}
        onChange={()=>{
          setCharAllow((prev)=>!prev)
        }}
        />
  <label for="example-1">Symbols</label>
      </div>
      
      
     
      </div>
</div>
    </>
  )
}

export default App
