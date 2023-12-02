import { useState } from "react"
import axios from "axios"
import {useNavigate,Link} from "react-router-dom";
const Login = () => {
    
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/login',{email,password})
        .then(result=>{console.log(result)
            if(result.data === "Success")
            navigate('/home')
        })
        .catch(err => console.error(err))
    }
  return (
    <div className=" m-5 d-flex justify-content-center align-items-center ">
        <div className='m-5' style={{maxWidth: '600px'}}>
        <form onSubmit={handleSubmit} className='p-5 border border-index d-flex flex-column bg-info '>
          <h2 className="text-uppercase text-center mb-5">Login your Account</h2>
          <input className='mb-4 p-2 ' placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} size='lg' id='form2' type='email'/>
          <input className='mb-4 p-2 ' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} size='lg' id='form3' type='password'/>
          <button className=' p-2 mb-4 w-100 bg-primary text-light border border-light ' size='lg'>Login</button>
          <div className="d-flex justify-content-sm-between  ">
            <div>
                you are create new account?
            </div>
            <div className=" d-flex p-1 border-light border">
                <Link to="/register" className="text-decoration-none text-light ">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;