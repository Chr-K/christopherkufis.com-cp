import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Root(){
   async function handleLogout(){
    const res = await fetch('https://api.christopherkufis.com/logout',{
        method:'POST',
        credentials:'include',
        redirect:'follow',
        mode:'cors',
    })

    if(res.ok){
        res.json().then((res)=>{
            console.log(res.message)
        })
    }

    }
return(
    <>
    <div className="container">
    <div className="nav">
        <span className="chris">Christopher Kufis</span>
            <div className="nav-btn">
            <Link to='/home'>Edit Articles</Link>
            <span onClick={handleLogout}>Logout</span>
            </div>
        </div>
        <div className="content">
        <Outlet></Outlet>
        </div>
    </div>
    </>
)
}