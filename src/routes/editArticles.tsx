import { CardProps } from "../components/types/cardprops"
import { useEffect,useState } from "react"
import Card from "../components/card"
export default function editArticles(){
    const [articles,setArticles] = useState([])
    
    useEffect(()=>{
        fetch('https://api.christopherkufis.com/articles',{
            method:"GET",
            mode:"cors"
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`)
            }

            return res.json()
        })
        .then((res)=>{
            setArticles(res)
        })
    },[])

    

    let content
    if(articles.length > 0){
        content = articles.map((article:CardProps)=>(
            <Card  {...article}></Card>
        )
       )
    }
    else{
        
        let empty:CardProps = 
        {title:'Hello World',subtitle:'',content:"<p>123</p>",created:'',updated:'',ID:0}

        content = <>
        <Card {...empty}></Card>
        <Card {...empty}></Card>
        <Card {...empty}></Card>
        </>
    }
    return(
        <>
        {content}
        </>
        )
}