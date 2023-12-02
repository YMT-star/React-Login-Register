import { useState } from "react"
import axios from "axios"
import {useNavigate,Link} from "react-router-dom";
const Register = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/register',{name,email,password})
        .then(result=>{console.log(result)
            navigate('/login')
        })
        .catch(err => console.error(err))
    }
  return (
    <div className=" m-5 d-flex justify-content-center align-items-center ">
        <div className='m-4' style={{maxWidth: '600px'}}>
        <form onSubmit={handleSubmit} className='p-5 border border-index d-flex flex-column bg-info '>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <input className='mb-4 p-2 ' placeholder='Your Name' onChange={(e)=>setName(e.target.value)} size='lg' id='form1' type='text'/>
          <input className='mb-4 p-2 ' placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} size='lg' id='form2' type='email'/>
          <input className='mb-4 p-2 ' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} size='lg' id='form3' type='password'/>
          
          <button className=' p-2 mb-4 w-100 bg-primary text-light border border-light ' size='lg'>Register</button>
          <div className="d-flex justify-content-sm-between  ">
            <div>
                your have already exist account?
            </div>
            <div className=" d-flex p-1 border-light border">
                <Link to="/login" className="text-decoration-none text-light ">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register