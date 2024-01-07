import { CardProps } from "../components/types/cardprops"
import { useEffect,useState } from "react"
import Card from "../components/card"
export default function editArticles(){
    const [articles,setArticles] = useState([])
    
    useEffect(()=>{
        getArticles()
    },[articles])
    async function getArticles() {
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
    }
    
    async function handleDelete(id:number){
        try{
            await fetch('https://api.christopherkufis.com/delete-article',{
                method:"DELETE",
                mode:'cors',
                credentials:'include',
                headers:{"content-type":"application/json"},
                body:JSON.stringify({id:id}),
            }).then((res)=>{
                res.json().then((res)=>{
                    getArticles()
                    console.log(res)
                })
            })
        }
        catch(err){
            console.error(err)
        }
    }
    let content
    if(articles.length > 0){
        content = articles.map((article:CardProps)=>(
            <Card  {...article} onClick={()=>{handleDelete(article.ID)}}></Card>
        )
            
       )
    }
    else{
        
        let empty:CardProps = 
        {title:'Hello World',subtitle:'',content:"<p>123</p>",created:'',updated:'',ID:0,onClick:()=>{console.log('delete')}}

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