import '../../styles/home.css'
import { useState } from 'react';
import Tiptap from '../components/TipTap';
export default function Home(){
    const [title,setTitle] = useState('')
    console.log(title)
    async function submit(){
        await fetch('https//api.christopherkufis.com/imageupload',{
            method:'GET',
            mode:'cors',
            credentials:'include',

        }).then((res)=>{
            res.json().then((res)=>console.log(res))
        })
    }

    return(
    <div className="container-home">
        <label>Title</label>
        <input onChange={(e)=>{setTitle(e.target.value)}} id='title-input'></input>
        <div className='editor-container'>
            <Tiptap></Tiptap>
        </div>
        <button className='btn-1' onClick={submit}>Submit</button>
    </div>)
} 