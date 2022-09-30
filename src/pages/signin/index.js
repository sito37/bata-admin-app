import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/features/users/auth.actions";
import Layout from "../../components/Layout";

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const user = {
    email, password
  }

  const loginUserRequest = (e) => {
    e.preventDefault()
    dispatch(loginUser(user))
  }


  return (
    <Layout>
    <div className="bg-slate-50 h-[100vh] pt-7">
      <form onSubmit={loginUserRequest} className="flex flex-col justify-around w-2/5 md:w-1/3 mx-auto rounded-lg gap-3 py-2 px-3 bg-white shadow-md" >
        <h2 className="text-2xl">Sign in</h2>
        <input 
          className="border rounded-lg h-10 px-2"
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         />
        <input 
          className="border rounded-lg h-10 px-2"
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         />
         <button type="submit" className=" h-9 bg-blue-700 text-white rounded-xl hover:bg-blue-500 my-3"> Sign In</button>
      </form>
    </div>
    </Layout>
  );
};

export default Signin;
