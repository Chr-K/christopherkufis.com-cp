import { useState } from 'react'
import '../../styles/toolbar.css'
export default function ToolBar(){
    const [isBold,setIsBold] = useState("normal")
    function Bold(){
        var selection = window.getSelection()
        var content = selection?.getRangeAt(0)
        var element = content?.startContainer.parentElement
        //check if null
        if(element){
            if(element?.textContent){
                if(content?.toString().length != element?.textContent.length){
                    const span = document.createElement('span')
                    span.style.fontWeight = 'bold'
                    content?.surroundContents(span)
                    setIsBold('Bold')
                    window.getSelection()?.removeAllRanges()
                    span.focus()
                }
                else{
                    if(element.style.fontWeight != 'bold'){
                        element.style.fontWeight = 'bold'
                        setIsBold('Bold')
                    }
                    else{
                        element.style.fontWeight = 'normal'
                        setIsBold('normal')
                    }
                }
            }

        }
        //check if null

    }


    return(
        <div className="toolbar">
            <button id='bold-btn' style={{fontWeight:isBold,fontSize:'large'}}  onClick={Bold}>B</button>
        </div>
    )
}