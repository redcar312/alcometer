import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState(0);
  const [time,setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [prom, setProm] = useState(0)
  function handleSubmit(e){
    e.preventDefault();
    let alcohol = 0;
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsleft = grams - (burning * time)
    if (gender === "male") {
      alcohol = gramsleft / (weight * 0.7)

    } 
    else {
      alcohol = gramsleft / (weight * 0.6)
       
    }
    if(alcohol < 0){
      setProm(0);
    } else {
    setProm(alcohol);
    }
  }
  return (
   <div id="container">
    <h3>Alcometer</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input type="number" onChange={e => setWeight(e.target.value)} value={weight}></input>
      </div>
   
    <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles}  onChange={e => setBottles(e.target.value)}>
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
   
      <div>
        <label>Time</label>
        <select name="time"  value={time} onChange={e => setTime(e.target.value)} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          

          </select>  
      </div>
   <div>
     <label>Gender</label>
     <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
     <input type="radio" name="gender" value="female"  onChange={e => setGender(e.target.value)} /><label>Female</label>
   </div>

  <div>
    <output>{prom.toFixed(1)}</output>
  </div> 
  <div>
    <button>Calculate</button>
  </div>
   </form>
   </div>
  

)
}

export default App;
