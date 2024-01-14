import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
export default function Root(){
    const testMode = true;
    const [LoggedIn,setLoggedIn] = useState(isLoggedIn)
    const navigate = useNavigate()
    if(testMode){

    }
    else{
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
    }

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
    async function handleNav(dest:string){
        if(await isLoggedIn()){
            navigate(dest)
        }
    }

return(
    <>
    <div className="container">
    <div className="nav">
        <span onClick={()=>{handleNav('/home')}} className="chris">Christopher Kufis</span>
            <div className="nav-btn">
            <span className="link" onClick={()=>{handleNav('/edit-articles')}}>Edit Articles</span>
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