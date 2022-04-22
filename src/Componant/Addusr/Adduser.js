import React from 'react';

const Adduser = () => {
    const handleFrom=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const user={name,email};
     
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('sucess',data);
            alert('User added Sucessfully');
            e.target.reset()
           
        })
      

    }
    return (
        <div>
            <h2>Please add Users</h2>
            <form  onSubmit={handleFrom}>
                <input type="text" name="name" placeholder='Name'/>
                <br />
                <input type="email" name="email" placeholder='Email'/>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Adduser;