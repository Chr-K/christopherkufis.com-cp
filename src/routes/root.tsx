import { Outlet, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Root(){
    const navigate = useNavigate()
   async function handleLogout(){
    try{
        const res = await fetch("https://api.christopherkufis.com/logout",{
            method:'POST',
            mode:'cors',
            headers:{"content-type":"application/json"},
            redirect:"follow",
            credentials:'include',
        })
    
        if(res.ok){
            res.json().then((res)=>{
                console.log(res.message)
            })
            navigate('/')
        }
    }
    catch(err){
        console.error(err);
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