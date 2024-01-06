import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Root(){
    const [LoggedIn,setLoggedIn] = useState(isLoggedIn())
    const navigate = useNavigate()

    useEffect(()=>{
        if(!LoggedIn){
                navigate('/')
        }
    },[LoggedIn])

    async function isLoggedIn(){
        const res = await fetch('https://api.christopherkufis.com/loggedin',{
            method:'POST',
            mode:'cors',
            headers:{"content-type":"application/json"},
            credentials:'include',
        })
        if(res.ok){
            return true;
        }else{
            return false;
        }
    }
    async function logOut(){
        const res = await fetch('https://api.christopherkufis.com/logout',{
            method:'POST',
            mode:'cors',
            headers:{"content-type":"application/json"},
            credentials:'include',
        })
        if(res){
            setLoggedIn(isLoggedIn())
        }
    }

return(
    <>
    <div className="container">
    <div className="nav">
        <span className="chris">Christopher Kufis</span>
            <div className="nav-btn">
            <Link to='/home'>Edit Articles</Link>
            <span onClick={logOut}>Logout</span>
            </div>
        </div>
        <div className="content">
        <Outlet></Outlet>
        </div>
    </div>
    </>
)
}