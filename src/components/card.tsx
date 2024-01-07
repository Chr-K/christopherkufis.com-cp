import '../../styles/card.css'
import { CardProps } from './types/cardprops'
import { useNavigate } from 'react-router-dom'

export default function Card(card : CardProps){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/article/${card.ID}`)
    }
    async function handleDelete(){
        const res = await fetch('https://api.christopherkufis.com/delete-article',{
            method:'DELETE',
            body:JSON.stringify({id:card.ID}),
            headers:{
                'content-type': 'application/json'
            },
            mode:'cors',
            credentials:'include'

        })
        if(res.ok){
            res.json().then((res)=>{
                console.log(res.message)
            })
        }
    }
    return(
        <div className='card-container'>
            <div onClick={handleDelete} className='delete'>Delete</div>
    <div className="card" onClick={handleClick}>
        <p className='card-title'> {card.title} </p>
        <p className='card-content'> {card.subtitle} </p>
        <p className='read-link'>Click To Read</p>
    </div>
    </div>


    
    )
}