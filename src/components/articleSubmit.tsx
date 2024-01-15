import { useCurrentEditor } from "@tiptap/react"
import { useNavigate } from "react-router-dom"

export default function ArticleSubmit(){
    const {editor} = useCurrentEditor()
    const navigate = useNavigate()
    async function submit(){
        if(!editor){

        }
        else{
            let title = document.getElementById("title-input") as HTMLInputElement
            const res = await fetch('https://api.christopherkufis.com/submitarticle/',{
                method:"POST",
                mode:"cors",
                credentials:'include',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify({
                    content:editor.getHTML,
                    title:title.value
                })
            })   
            if(res.ok){
                res.json().then((res)=>{
                    console.log(res)
                    navigate('/edit-articles')
                })
            }
        }

    }
    return(
    <>
    <button onClick={submit} className="btn-1">Submit</button>
    </>
    )
}