import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { registerUser } from "../../redux/features/users/auth.actions";

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userInfo, loading} = useSelector(state => state.auth)

 const user = {firstName, lastName, email, password}

 const userSignupRequest = (e) => {
    e.preventDefault()
    console.log(user)
    dispatch(registerUser(user))

 }

 if(userInfo){
    navigate('/signin')
 }

 if(loading){
  return <p>Loading...</p>
 }

  return (
    <Layout>
      <div className="bg-slate-50 h-[100vh] pt-7">
      <form onSubmit={userSignupRequest} className="flex flex-col justify-around w-2/5 mx-auto rounded-lg gap-3 py-2 px-3 bg-white shadow-md" >
        <h2 className="text-2xl">Sign up</h2>
        <div className="flex justify-between gap-2 w-full">
          <div>
            <label>First Name</label>
            <input 
              className="border rounded-lg h-10 w-full px-2 my-2"
              type="text"
              placeholder="enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input 
              className="border rounded-lg h-10 w-full px-2  my-2"
              type="text"
              placeholder="enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <input 
            className="border rounded-lg h-10 w-full my-2 px-2"
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            className="border rounded-lg h-10 w-full my-2 px-2"
            type="password"
            placeholder="enter your email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
         <button type="submit" className=" h-10 w-20 bg-blue-700 text-white rounded-lg  hover:bg-blue-500"> Sign up</button>
      </form>
    </div>
    </Layout>
  );
};

export default Signup;
