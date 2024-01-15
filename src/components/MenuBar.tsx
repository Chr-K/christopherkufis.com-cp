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
    function uploadClick(){
        document.getElementById('hidden-image-input')?.click();
    }
    async function inputImage(e:EventTarget){
        const element = e as HTMLInputElement
        const formData = new FormData()
        if(element.files && element.files[0]){
            formData.append('image',element.files[0])
            uploadImg(formData)
        }
    }

    async function uploadImg(formData:FormData){
        fetch('https://api.christopherkufis.com/imageupload',{
            method:'POST',
            credentials:"include",
            body:formData,
            mode:'cors'
        }).then(response=>response.json())
        .then(data=>{
            editor?.commands.setImage({src:'../christopherkufis.com-backend/' + data})
        })
        .catch(error=>console.error('Error',error))
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
        <span onClick={uploadClick}><ImageIconLine></ImageIconLine></span>
        <input onInput={(e)=>{inputImage(e.currentTarget)}} id='hidden-image-input' style={{display:'none'}} type='file' accept='image/*'></input>
    </div>
    )
}
