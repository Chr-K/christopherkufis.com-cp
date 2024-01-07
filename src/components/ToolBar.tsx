import '../../styles/toolbar.css'
export default function ToolBar(){

    function setTextStyle(cb:any){
        var selection = window.getSelection()
        var content = selection?.getRangeAt(0)
        var element = content?.startContainer.parentElement
        if(element){
            if(element?.textContent){
                if(content?.toString().length != element?.textContent.length){
                    const span = document.createElement('span')
                    cb(span)
                    content?.surroundContents(span)
                    window.getSelection()?.removeAllRanges()
                }
                else{
                    cb(element)
                }
            }

        }
    }
    function Bold(element:HTMLElement){
        if(element.style.fontWeight != 'bold'){
        element.style.fontWeight = 'bold'
        }
        else{
            element.style.fontWeight = 'normal'
        }
    }
    function Size(element:HTMLElement,selectedSize:string){
        element.style.fontSize = selectedSize
    }

    return(
        <div className="toolbar">
            <button id='bold-btn' style={{fontSize:'large'}}  onClick={()=>{setTextStyle(Bold)}}>B</button>
            <select id='size-select' className='size-btn' onChange={(e)=>{
                const selectedSize = e.target.value
                setTextStyle((element:HTMLElement) => Size(element,selectedSize))
            }}>
                <option className='size-option'></option>
                <option className='size-option' value={'1rem'}>10</option>
                <option className='size-option' value={'1.2rem'}>12</option>
                <option className='size-option' value={'1.4rem'}>14</option>
                <option className='size-option' value={'1.6rem'}>16</option>
                <option className='size-option' value={'1.8rem'}>18</option>
                <option className='size-option' value={'2.0rem'}>20</option>
            </select>
        </div>
    )
}