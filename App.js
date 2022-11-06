import Header from './components/Header'
import Search from './components/Search'
import Tasks from './components/Tasks'
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  useEffect(()=>{
    getDoctorsFromServer()
  },[])

  const getDoctorsFromServer=()=>{
    axios.get(`http://localhost:9000/doctors`).then(
      (response)=>{
        setData(response.data)
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  const [data,setData] = useState([
    {
      id:1,
      name:'gaurav singh',
      address:'varanasi',
      doctorType:'Pedatrics',
      contactNo:'8009341247'
    },
    {
      id:2,
      name:'rahul yadav',
      address:'varanasi',
      doctorType:'Pedatrics',
      contactNo:'2387898999'
    },
  ] )
  return (
     
    <div className="App">
      <Header/>
      <Search datas={data} setData = {setData}/>
      <Tasks datas={data}/>
      
    </div>
  );
}

export default App;
