import React,{ useState } from 'react'
import axios from 'axios'

function Register() {
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')

    function register(event){

        event.preventDefault()
        alert('Register successfully..');

        var user = {
            name: name,
            email: email,
            password: password
        }
       axios.post('/api/user/registeruser', user).then(res=>{
           console.log(res);
       }).catch(err=>{
           console.log(err);
       })
    }


    return (
        <div>
           
            <form action="" onSubmit={register}>
            <h2>Register</h2>
                <input type="text" name="name" id="name"  className="form-control" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                <input type="email" name="email" id="email"  className="form-control" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                <input type="password" name="password" id="password"  className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <button className="btn btn-primary" type="submit" value="register">Register</button>
            </form>
        </div>
    )
}

export default Register
