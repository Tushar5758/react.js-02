import './App.css';
import Products_list from './Products_list';
import Header from './Header';
import {useState} from 'react';

function App() {

  function doSome(data) {
    console.log('Welcome '+data+' to 100 days of code challenge!');
  }
  let [name,setName] = useState('TUSHAR')
  let [ename,esetName]= useState()
  let [age,setAge]= useState()
  function changeData(){
    setName('Raj')
  }
  return (
    <div className='app'>
      <Header/>
       <Products_list/>
       <button className='btn' onClick={(event)=>{
        console.log(event);
        doSome("tushar")
       }}>Click</button> 
       <h3>{name}</h3>
       <button onClick={changeData}>Change</button>
       <h3>Name</h3>
       <h3>{ename}</h3>
       <input type='text' placeholder='enter name' onChange={(event)=>{
        esetName(event.target.value)
       }
       }></input>
       <h3>{age}</h3>
       <input type='number' placeholder='enter age' onChange={(event)=>{
        setAge(event.target.value)
       }
       }></input><br></br>
       <button type='button' onClick={()=>
       {
        console.log(name,age);
       }}>Click
       </button>
    </div>
   
  );
}

export default App;
