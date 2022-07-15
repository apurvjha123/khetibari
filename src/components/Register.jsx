import React, { useState } from 'react'
import { GiWheat } from "react-icons/gi";
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom';

const Register = () => {

  const [Input, setInput] = useState({
    username: "",
    email : "",
    password : ""
  })
  const history = useNavigate()

  const handleChange = (e) => {
    setInput({
      ...Input,
      [e.target.name]: e.target.value
    })
  }

  const sendData = async () => {
    const {username, email , password}= Input
    if(!username || !email || !password){
     alert('credential can not be empty')
    }
    await axios.post('https://khetibari.herokuapp.com/register/signup',{
      username : String(username),
      email : String(email),
      password: String(password)
    }).then(res => {
      if(res.statusText= 'OK'){
        history('/grains')
        return res.data;
      }
    }).catch(Error =>alert(Error.response.data.error)
    )
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    sendData()
  }

  return (
    <>
  
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
    <div className="flex justify-center">
      <GiWheat className="w-20 h-20 text-lime-600"/>
    </div>
    <h3 className="text-2xl font-bold text-center">Welcome</h3>
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <div>
          <label className="block" htmlFor="Name">
            Username
            <label>
              <input
                type="text"
                placeholder="Username" name="username" value={Input.name} onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-lime-600"
              />
            </label>
          </label>
        </div>
        <div className="mt-4">
          <label className="block" htmlFor="email">
            Email
            <label>
              <input
                type="email"
                placeholder="Email" name="email" value={Input.name} onChange={handleChange} required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-lime-600"
              />
            </label>
          </label>
        </div>
        <div className="mt-4">
          <label className="block">
            Password
            <label>
              <input
                type="password"
                placeholder="Password" name="password" value={Input.name} onChange={handleChange} autoComplete='on' minLength={5} required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-lime-600"
              />
            </label>
          </label>
        </div>
        <div className="flex">
          <button className="w-full px-6 py-2 mt-4 text-white bg-lime-600 rounded-lg hover:bg-lime-900">
            Create Account
          </button>
        </div>
        <div className="mt-6 text-grey-dark">
          Already have an account?
          <div className="text-lime-600 px-6 hover:underline">
            <Link to={'/login'}>
            Log in
            </Link>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default Register