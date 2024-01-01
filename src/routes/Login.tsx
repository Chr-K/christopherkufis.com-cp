import '../../styles/login.css'
import { useState, ChangeEvent } from 'react'
export default function Login(){
    const [formData,setFormData] = useState({username: '',password:''})
    async function handleSubmit(){
        try{
            const res = await fetch('https://api.christopherkufis.com/auth/',{
                method:'POST',
                mode:'cors',
                headers:{"content-type":"application/json"},
                redirect:"follow",
                body:JSON.stringify(formData),
            })
            if(res.ok){
                console.log(res.body)
            }
        }
        catch(err){

        }

    }

    function handleInput(e: ChangeEvent<HTMLInputElement>){
        setFormData({...formData,[e.target.id]: e.target.value})
    }

    return (
    <div className="login-box">
            <label>Username</label>
            <input id='username' value={formData.username} onChange={handleInput}></input>
            <label>Password</label>
            <input id='password' value={formData.password} onChange={handleInput} type='password'></input>
            <button onClick={handleSubmit} className='btn-1 login-btn'>Login</button>
    </div>
    )
}