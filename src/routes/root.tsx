import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
export default function Root(){
    const [LoggedIn,setLoggedIn] = useState(isLoggedIn)
    const navigate = useNavigate()
    useEffect(()=>{
        const checkSession = async () =>{
                if(await LoggedIn){
                }
                else{
                    navigate('/')
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
        }).then((res)=>{
        if(res.ok){
            return true;
        }
        else{
            return false;
        }            
        })
        return res

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
    async function handleEditArticles(){
        if(await isLoggedIn()){
            navigate('/home')
        }
    }

return(
    <>
    <div className="container">
    <div className="nav">
        <span className="chris">Christopher Kufis</span>
            <div className="nav-btn">
            <span className="link" onClick={handleEditArticles}>Edit Articles</span>
            <span className="link" onClick={logOut}>Logout</span>
            </div>
        </div>
        <div className="content">
        <Outlet></Outlet>
        </div>
    </div>
    </>
)
}