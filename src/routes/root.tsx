import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Root(){
return(
    <>
    <div className="container">
    <div className="nav">
        <span className="chris">Christopher Kufis</span>
            <div className="nav-btn">
            <Link to='/home'>Edit Articles</Link>
            <Link to='/home'>Logout</Link>
            </div>
        </div>
        <div className="content">
        <Outlet></Outlet>
        </div>
    </div>
    </>
)
}