import { useCurrentEditor } from "@tiptap/react"

export default function ArticleSubmit(){
    const {editor} = useCurrentEditor()
    async function submit(){
        console.log(editor?.getHTML())
    }
    return(
    <>
    <button onClick={submit} className="btn-1">Submit</button>
    </>
    )
}