import axios from 'axios'
import React, {useEffect, useState} from 'react'

function UserList() {
    const[userlist, setuserlist]=useState([])




    useEffect(() => {
       axios.post('/api/user/getusers').then(
           res=>{
               console.log(res);
               setuserlist(res.data)
           }
       ).catch(err=>{
           console.log(err)
       })
    }, [])

    const usersdata = userlist.map((obj)=>{
        return <tr>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.password}</td>
        </tr>
    })
    return (
        <div>
            <h2>User Lists</h2>
            <table className="table table-dark table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                {usersdata}
            </table>

        </div>
    )
}

export default UserList
