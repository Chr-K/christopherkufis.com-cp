import '../../styles/home.css'
import { useState } from 'react';
import Tiptap from '../components/TipTap';
export default function Home(){
    const [title,setTitle] = useState('')
    console.log(title)


    return(
    <div className="container-home">
        <label>Title</label>
        <input onChange={(e)=>{setTitle(e.target.value)}} id='title-input'></input>
        <div className='editor-container'>
            <Tiptap></Tiptap>
        </div>
    </div>)
} 