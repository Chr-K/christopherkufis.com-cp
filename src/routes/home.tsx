import ToolBar from '../components/ToolBar';
import '../../styles/home.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home(){
    const navigate = useNavigate()
    const [title,setTitle] = useState('')

    async function submit(){
        const content = document.getElementById('editor')?.innerHTML
        const res = await fetch('https://api.christopherkufis.com/submitarticle/',{
            method:"POST",
            mode:'cors',
            headers:{
                'content-type':'application/json',
        },
        body:JSON.stringify({
            content:content,
            title:title,
        }),
        credentials:'include',
        })
        if(res.ok){
            res.json().then((res)=>{
                console.log(res)
                navigate('/edit-articles')
            })
        }
    }
    return(
    <div className="container-home">
        <label>Title</label>
        <input onChange={(e)=>{setTitle(e.target.value)}} id='title-input'></input>
        <ToolBar></ToolBar>
        <div id='editor' className='editor' contentEditable='true'><div><br></br></div></div>
        <button className='btn-1 submit-btn' onClick={submit}>Submit</button>
    </div>)
}