import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUsers(data))
      
    },[])
    const userDelete=(id)=>{
        const prosit=window.confirm("Are You sure You want to Delete the Id")
        if(prosit){
           
            const url=`http://localhost:5000/user/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const reamining=users.filter(user=>user._id !==id);
                setUsers(reamining)

            })
        }
    }
    return (
        <div>
            <h2>User :{users.length}</h2>
            {
                users.map(u=><li key={u._id}>{u.email} <button onClick={()=>userDelete(u._id)}>X</button></li>
                )
            }
            
            
        </div>
    );
};

export default Home;