import React,{ useState } from 'react'
import axios from 'axios'

function Login() {
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')

    function login(event){

        event.preventDefault()
        alert('Login successfully..');

        var user = {
            email: email,
            password: password
        }
        
        axios.post('/api/user/loginuser', user)
        .then(res=>{
            console.log(res);
            alert(res.data)
        }).catch(err=>{
            console.log(err);
        })

    }


    return (
        <div>
            
            <form action="" onSubmit={login}>
            <h2>Login</h2>
                <input type="email" name="email" id="email"  className="form-control" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                <input type="password" name="password" id="password"  className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <button className="btn btn-primary" type="submit" value="login">Login</button>
            </form>
        </div>
    )
}

export default Login
