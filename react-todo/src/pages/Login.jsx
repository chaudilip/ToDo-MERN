import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context, server } from '../main';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { isAuthenticated, setIsAuthenticated,loading,setLoading } = useContext(Context);
    if(isAuthenticated) return <Navigate to={"/"} />;
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
    try {
        const {data} =  await axios.post(`${server}/users/login`,{
            email,password
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
  return (
    <div className='login'>
        <section>
            <form onSubmit={submitHandler}>
            <input  value={email} required onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email"/>
                <input value={password} required onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password"/>
                <button disabled={loading} type='submit'>Login</button>
                <h4>Or</h4>
                <Link to={"/register"}>Sign Up</Link>
            </form>
        </section>
    </div>
  )
}

export default Login