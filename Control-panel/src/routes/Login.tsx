import '../../styles/login.css'
export default function Login(){
    return (
    <div className="login-box">
            <label>Username</label>
            <input></input>
            <label>Password</label>
            <input type='password'></input>
            <button className='btn-1 login-btn'>Login</button>
    </div>
    )
}