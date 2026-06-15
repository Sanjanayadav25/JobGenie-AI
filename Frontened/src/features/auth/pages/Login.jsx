import  { useState} from 'react'
import {Link  , useNavigate} from 'react-router'
import '../auth.form.scss'
import {useAuth} from '../hooks/useAuth'



const Login = () => {
    
    const navigate = useNavigate();

    const [ email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const { loading , loadingMessage, handleLogin} = useAuth();

    const handleSubmit = async (e)=>{
       e.preventDefault()
      const data = await handleLogin({email ,password})
        if(data){
      navigate("/");
   }
    }

    if (loading) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">
          {loadingMessage || "Loading..."}
        </h1>

        <p className="text-gray-500 mt-2">
          Please wait a few seconds...
        </p>
      </div>
    </main>
  );
}

  return (
    <>
    <main>
        <div className="form-container">
            <h1>Login</h1>
              <form onSubmit ={ handleSubmit} >
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                     onChange= { (e)=>{ setEmail(e.target.value) }}
                     type="email" id='email' name='email' placeholder='Enter  email address' />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    onChange={(e)=>{ setPassword(e.target.value)}}
                    type="password" id='password' name='password' placeholder='Enter password' />
                </div>
                <button className='button primary-button'>Login</button>
             </form>
             <p>Don't have an account?<Link to = {"/register"}>Register</Link></p>
        </div>
    </main>
    </>
  )
}

export default Login