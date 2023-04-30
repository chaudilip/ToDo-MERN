import React , {useContext, useState} from 'react'
import { Link,Navigate } from 'react-router-dom';
import axios from "axios";
import { Context, server } from '../main';
import {toast} from "react-hot-toast";

function Register() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { isAuthenticated, setIsAuthenticated,loading,setLoading } = useContext(Context);
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
    try {
        const {data} =  await axios.post(`${server}/users/new`,{
            name,email,password
        },{
            headers:{
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        toast.success(data.message);
        setIsAuthenticated(true);
        setLoading(false);
    } catch (error) {
        toast.error(error.response.data.message);
        setIsAuthenticated(false);
        console.log(error);
    }
    }

    if(isAuthenticated) return <Navigate to={"/"} /> ;
  return (
    <div className='login'>
        <section>
            <form onSubmit={submitHandler}>
                <input value={name} required onChange={(e) => setName(e.target.value)} type='text' placeholder="Name"/>
                <input  value={email} required onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email"/>
                <input value={password} required onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password"/>
                <button disabled={loading} type='submit'>Sign Up</button>
                <h4>Or</h4>
                <Link to={"/login"}>Login</Link>
            </form>
        </section>
    </div>
  )
}

export default Register