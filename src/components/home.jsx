import React,{useEffect,useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar  from './navbar';
import '../css/home.css'
function Home() {
    const [chaptername,setChaptername] = useState("");
    const [name,setName] = useState("");
    const [pageno,setPageno] = useState("-1");
    const [sumeng,setSumeng] = useState("");
    const [sumhindi,setSumhindi] = useState("");
    const options = {
        method: 'GET',
        url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
        params: {limit: '18'},
        headers: {
          'X-RapidAPI-Key': '71fc6f16aemsh792ec41eb332eb6p189cf0jsnd8dd1b6110e3',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
      };
    const getSholok = async ()=>
    {    
        let x = Number(pageno);
        x+=1;
        setPageno(x);
        let data = await axios.request(options);
        console.log(data.data[x]);
        setChaptername(data.data[x].slug);
        setName(data.data[x].name);
        setSumeng(data.data[x].chapter_summary)
        setSumhindi(data.data[x].chapter_summary_hindi)
    }
    const getSholokprev = async ()=>
    {    
        let x = Number(pageno);
        if(x>0)
        {
          x-=1;
          setPageno(x);
          let data = await axios.request(options);
          console.log(data.data[x]);
          setChaptername(data.data[x].slug);
          setName(data.data[x].name);
          setSumeng(data.data[x].chapter_summary)
          setSumhindi(data.data[x].chapter_summary_hindi)
        }
    }
     useEffect(()=>{
        getSholok();
     },[])
  return (
     <>
       <Navbar /> 
       <div className="main">
       <div className="inner_class">
          <h2> 
            {chaptername==="" ? <p> Loding ...</p> : chaptername}
          </h2>
          </div>
          {chaptername==="" ? <p> Loding ...</p> : <div>  <div className="inner_class">
          <p><b> ENGLISH SUMMAARY </b></p>
          <p>
               {sumeng}
          </p>
       </div>
       <div className="inner_class">
          <p><b> HINDI SUMMAARY </b></p>
          <p>
               {sumhindi}
          </p>
       </div>
       <div className="inner_class">
          <button type="button" class="btn btn-primary m-2" onClick={getSholokprev.bind(this)}> previous chapter</button>
          <button type="button" class="btn btn-success m-2" onClick={getSholok.bind(this)}> next chapter</button>
       </div> </div>}
       </div>
    </>
  )
}

export default Home