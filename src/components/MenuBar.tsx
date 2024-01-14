import {useCurrentEditor } from '@tiptap/react'
import '../../styles/menubar.css'
import ImageIconLine from '../assets/icons/image-line'
export default function MenuBar(){
    const {editor} = useCurrentEditor()
    if(!editor){
        return null;
    }

    function handleKeyDown(e:KeyboardEvent){
        if(e.key == "Enter"){
            if(editor?.isActive('bold')){
                editor.chain().focus().toggleBold().run()
            }
            if(editor?.isActive('italic')){
                editor.chain().focus().toggleItalic().run()
            }
        }
    }
    function uploadImg(){
        document.getElementById('hidden-image-input')?.click();
    }
    function inputImage(e:EventTarget){
        const element = e as HTMLInputElement
        if(element.files && element.files[0]){
            const reader = new FileReader();
            reader.onload = (e)=>{
                const result = e.target?.result as string
                editor?.chain().focus().setImage({src:result}).run()
            }
            reader.readAsDataURL(element.files[0])
        }
    }

    function test(){
        console.log(editor?.getHTML())
    }

    editor.setOptions({editorProps:
        {handleDOMEvents:{
            keydown: (view,e)=>{handleKeyDown(e) 
                console.log(view)}
        }}
    })

    return(
    <div className='menu-bar'>
        <button className={editor.isActive('bold') ? 'activated' : ''}  onClick={()=>editor?.chain().focus().toggleBold().run()}>B</button>
        <button className={editor.isActive('italic') ? 'activated' : ''} onClick={()=>editor.chain().focus().toggleItalic().run()}>I</button>
        <span onClick={uploadImg}><ImageIconLine></ImageIconLine></span>
        <input onInput={(e)=>{inputImage(e.currentTarget)}} id='hidden-image-input' style={{display:'none'}} type='file' accept='image/*'></input>
        <button onClick={test}>Submit</button>
    </div>
    )
}
