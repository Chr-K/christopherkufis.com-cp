import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Root(){
    const [LoggedIn,setLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const checkSession = async ()=>{
            try{
                await isLoggedIn()
                if(!LoggedIn){
                    navigate('/')
                }
            }
            catch{
    
            }
        }
        checkSession()
    },[LoggedIn])

    async function isLoggedIn(){
        const res = await fetch('https://api.christopherkufis.com/loggedin',{
            method:'POST',
            mode:'cors',
            headers:{"content-type":"application/json"},
            credentials:'include',
        })
        if(res.ok){
            setLoggedIn(true)
        }else{
            setLoggedIn(false)
        }
    }
    async function logOut(){
        const res = await fetch('https://api.christopherkufis.com/logout',{
            method:'POST',
            mode:'cors',
            headers:{"content-type":"application/json"},
            credentials:'include',
        })
        if(res.ok){
            setLoggedIn(false)
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