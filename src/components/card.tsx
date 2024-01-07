import '../../styles/card.css'
import { CardProps } from './types/cardprops'
import { useNavigate } from 'react-router-dom'

export default function Card(card:CardProps){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/article/${card.ID}`)
    }
/*
    async function handleDelete(){
        try{
            await fetch('https://api.christopherkufis.com/delete-article',{
                method:"DELETE",
                mode:'cors',
                credentials:'include',
                headers:{"content-type":"application/json"},
                body:JSON.stringify({id:card.ID}),
            }).then((res)=>{
                res.json().then((res)=>{console.log(res)})
            })
        }
        catch(err){
            console.error(err)
        }
    }
*/
    return(
        <div className='card-container'>
        <div onClick={card.onClick} className='delete'>Delete</div>
        <div className="card" onClick={handleClick}>
        <p className='card-title'> {card.title} </p>
        <p className='card-content'> {card.subtitle} </p>
        <p className='read-link'>Click To Read</p>
    </div>
    </div>


    
    )
}