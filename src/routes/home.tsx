import '../../styles/home.css'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useRef, useState } from 'react';
export default function Home(){
    const module = {
        toolbar:[
            [{header: [1,2,false]}],
            ['bold','italic','underline','strike','blockquote'],
            [{align:[]}],
            ['link','image'],
            [{list: 'ordered'},{list: 'bullet'}],
            ['clean'],
        ]
    }
    const formats = [
        'header',
        'bold', 'italic','underline','strike','blockquote',
        'align',
        'link','image',
        'list','bullet',
        'clean',
        'size'
    ]
    const quilRef = useRef<ReactQuill | null>(null)
    const [title,setTitle] = useState<string>()
    const [preview,setPreview] = useState<TrustedHTML>(<div></div>)
    const handleContent = () =>{
        if(quilRef.current && quilRef.current.editor){
            const full = quilRef.current.editor.root.innerHTML;
            if(title){
                submit(full,title)
            }
        }
    }
    async function submit(content:string,title:string){
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
            })
        }
    }

    return(
    <div className="container-home">
        <div className='title-input'>
        <label>Title: </label>
        <input onChange={(e)=>{setTitle(e.target.value)}} id='title'></input>
        </div>
        <div className='quill-cont'>
        <ReactQuill onChange={(quilRef)=>{setPreview(quilRef)}} formats={formats} modules={module} ref={quilRef}></ReactQuill>
        </div>
        <button className='btn-1 submit-btn' onClick={handleContent}>Submit</button>
        <div id='preview' dangerouslySetInnerHTML={{__html:preview}}></div>
    </div>)
}