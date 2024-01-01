import '../../styles/login.css'
export default function Login(){
    function handleSubmit(){
        fetch('https://api.christopherkufis.com/auth',{
            method:'POST',
            mode:'cors'
                })
    }
    return (
    <div className="login-box">
            <label>Username</label>
            <input></input>
            <label>Password</label>
            <input type='password'></input>
            <button onClick={handleSubmit} className='btn-1 login-btn'>Login</button>
    </div>
    )
}