import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const {
    state: { user },
    dispatch
  } = useContext(AuthContext);

  const handelSubmit = async(e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Fill in username and password!")
      return;
    }

    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,
        {
          username,
          password
        })
    dispatch({
      type: "LOGIN",
      payload: data
    })

    window.localStorage.setItem("user", JSON.stringify(data))
    console.log("User logged in");

    return navigate("/")
    } catch (err) {
      console.log("Error: " + err);

    }

  }


  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <div>
          <label>Username</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <button type="submit">Log In</button>




      </form>
    </div>
  )
};
export default Login;
